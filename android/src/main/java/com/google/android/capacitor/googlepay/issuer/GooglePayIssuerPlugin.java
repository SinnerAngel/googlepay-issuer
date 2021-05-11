package com.google.android.capacitor.googlepay.issuer;

import static com.google.android.gms.tapandpay.TapAndPayStatusCodes.TAP_AND_PAY_NO_ACTIVE_WALLET;
import static com.google.android.gms.tapandpay.TapAndPayStatusCodes.TAP_AND_PAY_TOKEN_NOT_FOUND;

import android.content.Intent;
import android.util.Base64;
import android.util.Log;
import androidx.annotation.NonNull;

import com.getcapacitor.Bridge;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.google.android.gms.common.api.ApiException;
import com.google.android.gms.common.util.Strings;
import com.google.android.gms.tapandpay.TapAndPay;
import com.google.android.gms.tapandpay.TapAndPayClient;
import com.google.android.gms.tapandpay.issuer.PushTokenizeRequest;
import com.google.android.gms.tapandpay.issuer.TokenInfo;
import com.google.android.gms.tapandpay.issuer.TokenStatus;
import com.google.android.gms.tapandpay.issuer.UserAddress;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;

import java.util.ArrayList;
import java.util.List;
import org.json.JSONObject;

@NativePlugin(
  requestCodes={
    GooglePayIssuerPlugin.REQUEST_CODE_PUSH_TOKENIZE,
    GooglePayIssuerPlugin.REQUEST_CREATE_WALLET
  }
)
public class GooglePayIssuerPlugin extends Plugin {

  private static final String TAG = "GooglePayIssuerPlugin";
  protected static final int REQUEST_CODE_PUSH_TOKENIZE = 3;
  protected static final int REQUEST_CREATE_WALLET = 4;
  protected static final int RESULT_CANCELED = 0;
  protected static final int RESULT_OK = -1;
  private TapAndPayClient tapAndPay;
  private PluginCall call;
  private String walletId;
  private Bridge brigde;
  public enum TokenStatusReference  {
    TOKEN_STATE_UNTOKENIZED(1),
    TOKEN_STATE_PENDING(2),
    TOKEN_STATE_NEEDS_IDENTITY_VERIFICATION(3),
    TOKEN_STATE_SUSPENDED(4),
    TOKEN_STATE_ACTIVE(5),
    TOKEN_STATE_FELICA_PENDING_PROVISIONING(6);

    public final int referenceId;
    public static TokenStatusReference getName(int referenceId){
      for(TokenStatusReference reference : values()) {
        if (reference.referenceId == referenceId) {
          return reference;
        }
      }
      return null;
    }
    private TokenStatusReference(int referenceId) {
      this.referenceId = referenceId;
    }
  }

  public GooglePayIssuerPlugin() {}

  @Override
  public void load() {
    super.load();
    this.brigde = brigde;
    this.tapAndPay = TapAndPay.getClient(this.bridge.getActivity());
  }

  @Override
  public void handleOnActivityResult(int requestCode, int resultCode, Intent data) {
    super.handleOnActivityResult(requestCode, resultCode, data);

    // Get the previously saved call
    PluginCall call = getSavedCall();

    if (call == null) {
      return;
    }

    if (requestCode == REQUEST_CODE_PUSH_TOKENIZE) {
      if (resultCode == RESULT_CANCELED) {
        JSObject result = new JSObject();
        result.put("value", "canceled");
        call.success(result);
        return;
      } else if (resultCode == RESULT_OK) {
        // The action succeeded.
        String tokenId = data.getStringExtra(TapAndPay.EXTRA_ISSUER_TOKEN_ID);
        JSObject result = new JSObject();
        result.put("value", tokenId);
        call.success(result);
        // Do something with tokenId.

        return;
      }
    } else if (requestCode == REQUEST_CREATE_WALLET) {
      if (resultCode == this.bridge.getActivity().RESULT_CANCELED) {
        // The user canceled the request.
        JSObject result = new JSObject();
        result.put("value", "canceled");
        call.success(result);
        return;
      } else if (resultCode == this.bridge.getActivity().RESULT_OK) {
        call.success();
        return;
      }
    }
    else {
      call.success();
      return;
    }
  }

  @PluginMethod
  public void getEnvironment(final PluginCall call) {
    try {
      this.tapAndPay.getEnvironment()
        .addOnCompleteListener(
          new OnCompleteListener<String>() {
            @Override
            public void onComplete(@NonNull Task<String> task) {
              Log.i(TAG, "onComplete (getEnvironment) - " + task.isSuccessful());
              if (task.isSuccessful()) {
                Log.d(TAG, "getEnvironment: " + task.getResult());
                JSObject result = new JSObject();
                result.put("value", task.getResult());
                call.success(result);
              }
            }
          }
        );
    } catch (Exception e) {
      call.error(e.getMessage());
    }
  }

  @PluginMethod
  public void getActiveWalletID(final PluginCall call) {
    try {
      this.tapAndPay.getActiveWalletId()
        .addOnCompleteListener(
          new OnCompleteListener<String>() {
            @Override
            public void onComplete(@NonNull Task<String> task) {
              Log.i(TAG, "onComplete (getActiveWalletID) - " + task.isSuccessful());
              if (task.isSuccessful()) {
                walletId = task.getResult();
                // Next: look up token ids for the active wallet
                // This typically involves network calls to a server with knowledge
                // of wallets and tokens.
                JSObject result = new JSObject();
                result.put("value", walletId);
                call.success(result);
              } else {
                ApiException apiException = (ApiException) task.getException();
                if (apiException.getStatusCode() == TAP_AND_PAY_NO_ACTIVE_WALLET) {
                  // There is no wallet. A wallet will be created when tokenize()
                  // or pushTokenize() is called.
                  // If necessary, you can call createWallet() to create a wallet
                  // eagerly before constructing an OPC (Opaque Payment Card)
                  // to pass into pushTokenize()
                  createWallet();
                  getActiveWalletID(call);
                }
              }
            }
          }
        );
    } catch (Exception e) {
      call.error(e.getMessage());
    }
  }

  @PluginMethod
  public void getTokenStatus(final PluginCall call) {
    final String tsp = call.getString("tsp");
    final String tokenReferenceId = call.getString("tokenReferenceId");

    int tokenServiceProvider = (tsp.equalsIgnoreCase("VISA")) ? TapAndPay.TOKEN_PROVIDER_VISA : TapAndPay.TOKEN_PROVIDER_MASTERCARD;
    try {
      this.tapAndPay.getTokenStatus(tokenServiceProvider, tokenReferenceId)
        .addOnCompleteListener(
          new OnCompleteListener<TokenStatus>() {
            @Override
            public void onComplete(@NonNull Task<TokenStatus> task) {
              Log.i(TAG, "onComplete (getTokenStatus) - " + task.isSuccessful());
              if (task.isSuccessful()) {
                @TapAndPay.TokenState
                int tokenStateInt = task.getResult().getTokenState();
                boolean isSelected = task.getResult().isSelected();
                // Next: update payment card UI to reflect token state and selection
                JSObject result = new JSObject();
                result.put("code", tokenStateInt);
                result.put("message", TokenStatusReference.getName(tokenStateInt));
                call.success(result);
              } else {
                ApiException apiException = (ApiException) task.getException();
                if (apiException.getStatusCode() == TAP_AND_PAY_TOKEN_NOT_FOUND) {
                  // Could not get token status
                  JSObject result = new JSObject();
                  result.put("code", apiException.getStatusCode());
                  result.put("message", "TAP_AND_PAY_TOKEN_NOT_FOUND");
                  call.success(result);
                }
              }
            }
          }
        );
    } catch (Exception e) {
      call.error(e.getMessage());
    }
  }

  @PluginMethod
  public void getStableHardwareId(final PluginCall call) {
    try {
      this.tapAndPay.getStableHardwareId()
        .addOnCompleteListener(
          new OnCompleteListener<String>() {
            @Override
            public void onComplete(@NonNull Task<String> task) {
              Log.i(TAG, "onComplete (getStableHardwareId) - " + task.isSuccessful());
              if (task.isSuccessful()) {
                Log.d(TAG, "getStableHardwareId: " + task.getResult());
                JSObject result = new JSObject();
                result.put("value", task.getResult());
                call.success(result);
              }
            }
          }
        );
    } catch (Exception e) {
      call.error(e.getMessage());
    }
  }

  @PluginMethod
  public void listTokens(final PluginCall call) {
    try {
      this.tapAndPay.listTokens()
        .addOnCompleteListener(
          new OnCompleteListener<List<TokenInfo>>() {
            @Override
            public void onComplete(@NonNull Task<List<TokenInfo>> task) {
              if (task.isSuccessful()) {
                JSObject result = new JSObject();
                List<String> tokens = new ArrayList<String>();
                for (TokenInfo token : task.getResult()) {
                  Log.d(TAG, "Found token with ID: " + token.getIssuerTokenId());
                  tokens.add(token.getIssuerTokenId());
                }
                result.put("value", tokens);
                call.success(result);
              }
            }
          }
        );
    } catch (Exception e) {
      call.error(e.getMessage());
    }
  }

  @PluginMethod
  public void registerDataChangedListener(final PluginCall call) {
    try {
      this.tapAndPay.registerDataChangedListener(
        new TapAndPay.DataChangedListener() {
          @Override
          public void onDataChanged() {
            call.success();
          }
        }
      );
    } catch (Exception e) {
      call.error(e.getMessage());
    }
  }

  @PluginMethod
  public void createWallet() {
    try {
      this.tapAndPay.createWallet(this.bridge.getActivity(), REQUEST_CREATE_WALLET);
    } catch (Exception e) {
      call.error(e.getMessage());
    }
  }

  @PluginMethod
  public void pushProvision(final PluginCall call) {
    Log.i(TAG, "PUSHPROVISION --- 1");
    String opcData = call.getString("opc");
    byte[] opc = opcData.getBytes();
    String tsp = call.getString("tsp");
    String clientName = call.getString("clientName");
    String lastDigits = call.getString("lastDigits");
    JSONObject address = call.getObject("address");
    try {
      int cardNetwork = (tsp.equals("VISA")) ? TapAndPay.CARD_NETWORK_VISA : TapAndPay.CARD_NETWORK_MASTERCARD;
      int tokenProvider = (tsp.equals("VISA")) ? TapAndPay.TOKEN_PROVIDER_VISA : TapAndPay.TOKEN_PROVIDER_MASTERCARD;
      UserAddress userAddress = UserAddress
        .newBuilder()
        .setName(address.getString("name"))
        .setAddress1(address.getString("address"))
        .setLocality(address.getString("locality"))
        .setAdministrativeArea(address.getString("administrativeArea"))
        .setCountryCode(address.getString("countryCode"))
        .setPostalCode(address.getString("postalCode"))
        .setPhoneNumber(address.getString("phoneNumber"))
        .build();

      PushTokenizeRequest pushTokenizeRequest = new PushTokenizeRequest.Builder()
        .setOpaquePaymentCard(opc)
        .setNetwork(cardNetwork)
        .setTokenServiceProvider(tokenProvider)
        .setDisplayName(clientName)
        .setLastDigits(lastDigits)
        .setUserAddress(userAddress)
        .build();
      saveCall(call);
      this.tapAndPay.pushTokenize(this.bridge.getActivity(), pushTokenizeRequest, REQUEST_CODE_PUSH_TOKENIZE); // a request code value you define as in Android's startActivityForResult
    } catch (Exception e) {
      call.error(e.getMessage());
    }
  }
}

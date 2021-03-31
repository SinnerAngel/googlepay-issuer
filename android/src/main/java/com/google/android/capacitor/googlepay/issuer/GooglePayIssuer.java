package com.google.android.capacitor.googlepay;

import static com.google.android.gms.tapandpay.TapAndPayStatusCodes.TAP_AND_PAY_NO_ACTIVE_WALLET;
import static com.google.android.gms.tapandpay.TapAndPayStatusCodes.TAP_AND_PAY_TOKEN_NOT_FOUND;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.google.android.gms.common.api.ApiException;
import com.google.android.gms.tapandpay.TapAndPay;
import com.google.android.gms.tapandpay.TapAndPayClient;
import com.google.android.gms.tapandpay.issuer.PushTokenizeRequest;
import com.google.android.gms.tapandpay.issuer.TokenInfo;
import com.google.android.gms.tapandpay.issuer.TokenStatus;
import com.google.android.gms.tapandpay.issuer.UserAddress;
import com.google.android.gms.tasks.OnCanceledListener;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.Task;
import java.util.List;

@NativePlugin
public class GooglePayIssuer extends Plugin {

    private static final String TAG = "GooglePayIssuer";
    private static final int REQUEST_CODE_PUSH_TOKENIZE = 3;
    private static final int REQUEST_CREATE_WALLET = 4;
    private static final int RESULT_CANCELED = 0;
    private static final int RESULT_OK = -1;
    private TapAndPayClient tapAndPay;
    private String walletId;

    public GooglePayIssuer() {}

    @PluginMethod
    public void initialize(CPluginCall call) {
        tapAndPay = TapAndPay.getClient(this.cordova.getActivity());
    }
    
    @PluginMethod
    public void getTokenStatus(int tsp, String tokenReferenceId, final PluginCall call){
        try{
          tapAndPay.getTokenStatus(tsp, tokenReferenceId)
            .addOnCompleteListener(
              new OnCompleteListener<TokenStatus>() {
                @Override
                public void onComplete(@NonNull Task<TokenStatus> task) {
                  Log.i(TAG, "onComplete (getTokenStatus) - " + task.isSuccessful());
                  if (task.isSuccessful()) {
                    @TapAndPay.TokenState int tokenStateInt = task.getResult().getTokenState();
                    boolean isSelected = task.getResult().isSelected();
                    // Next: update payment card UI to reflect token state and selection
                    call.success(tokenStateInt);
                  } else {
                    ApiException apiException = (ApiException) task.getException();
                    if (apiException.getStatusCode() == TAP_AND_PAY_TOKEN_NOT_FOUND) {
                      // Could not get token status
                      call.success(apiException.getStatusCode());
                    }
                  }
                }
              });
        }
        catch (Exception e){
            call.error(e.getMessage());
        }
       }
       
       @PluginMethod
       public void getActiveWalletID(CallbackContext callbackContext) {
        try{
          tapAndPay.getActiveWalletId().addOnCompleteListener(
            new OnCompleteListener<String>() {
              @Override
              public void onComplete(@NonNull Task<String> task) {
                Log.i(TAG, "onComplete (getActiveWalletID) - " + task.isSuccessful());
                if (task.isSuccessful()) {
                  walletId = task.getResult();
                  // Next: look up token ids for the active wallet
                  // This typically involves network calls to a server with knowledge
                  // of wallets and tokens.
                  callbackContext.success(walletId);
                } else {
                  ApiException apiException = (ApiException) task.getException();
                  if (apiException.getStatusCode() == TAP_AND_PAY_NO_ACTIVE_WALLET) {
                    // There is no wallet. A wallet will be created when tokenize()
                    // or pushTokenize() is called.
                    // If necessary, you can call createWallet() to create a wallet
                    // eagerly before constructing an OPC (Opaque Payment Card)
                    // to pass into pushTokenize()
                    createWallet();
                    getActiveWalletID(callbackContext);
                  }
                }
              }
            });
        }
        catch (Exception e){
          callbackContext.error(e.getMessage());
        }
      }
}

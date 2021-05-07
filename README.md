# capacitor-plugin-googlepay-issuer

Plugin do Google Pay para o Capacitor

## Required

This plugin required Tap And Pay 17.1.0 SDK, access https://developers.google.com/pay/issuers

## Install

```bash
npm install capacitor-plugin-googlepay-issuer
npx cap sync
```

On Android, register the plugin in your main activity:
```java
import com.google.android.capacitor.googlepay.issuer.GooglePayIssuerPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(GooglePayIssuerPlugin.class);
    }});
  }
}
```

## API

<docgen-index>

* [`getActiveWalletID()`](#getactivewalletid)
* [`getTokenStatus(...)`](#gettokenstatus)
* [`getEnvironment()`](#getenvironment)
* [`getStableHardwareId()`](#getstablehardwareid)
* [`listTokens()`](#listtokens)
* [`deleteToken(...)`](#deletetoken)
* [`selectToken(...)`](#selecttoken)
* [`registerDataChangedListener()`](#registerdatachangedlistener)
* [`pushProvision(...)`](#pushprovision)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getActiveWalletID()

```typescript
getActiveWalletID() => any
```

returns the ID of the active wallet

**Returns:** <code>any</code>

--------------------


### getTokenStatus(...)

```typescript
getTokenStatus(options: { tsp: string; tokenReferenceId: string; }) => any
```

returns the status of a token with a given token ID

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code>{ tsp: string; tokenReferenceId: string; }</code> |

**Returns:** <code>any</code>

--------------------


### getEnvironment()

```typescript
getEnvironment() => any
```

returns the environment (e.g. production or sandbox)

**Returns:** <code>any</code>

--------------------


### getStableHardwareId()

```typescript
getStableHardwareId() => any
```

returns the stable hardware ID of the device

**Returns:** <code>any</code>

--------------------


### listTokens()

```typescript
listTokens() => any
```

returns a list of tokens registered to the active wallet

**Returns:** <code>any</code>

--------------------


### deleteToken(...)

```typescript
deleteToken(options: { tsp: string; }) => any
```

returns the status of a token with a given token ID

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ tsp: string; }</code> |

**Returns:** <code>any</code>

--------------------


### selectToken(...)

```typescript
selectToken(options: { tsp: string; }) => any
```

returns the status of a token with a given token ID

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ tsp: string; }</code> |

**Returns:** <code>any</code>

--------------------


### registerDataChangedListener()

```typescript
registerDataChangedListener() => any
```

returns the status of a token with a given token ID

**Returns:** <code>any</code>

--------------------


### pushProvision(...)

```typescript
pushProvision(options: { opc: string; tsp: string; clientName: string; lastDigits: string; address: any; }) => any
```

Starts the push tokenization flow

| Param         | Type                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------ |
| **`options`** | <code>{ opc: string; tsp: string; clientName: string; lastDigits: string; address: any; }</code> |

**Returns:** <code>any</code>

--------------------

</docgen-api>

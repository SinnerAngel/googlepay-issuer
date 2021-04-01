# capacitor-plugin-googlepay-issuer

Plugin do Google Pay para o Capacitor

## Install

```bash
npm install capacitor-plugin-googlepay-issuer
npx cap sync
```

## API

<docgen-index>

* [`getActiveWalletID()`](#getactivewalletid)
* [`getTokenStatus(...)`](#gettokenstatus)
* [`getEnvironment()`](#getenvironment)
* [`getStableHardwareId()`](#getstablehardwareid)
* [`listTokens()`](#listtokens)
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


### pushProvision(...)

```typescript
pushProvision(options: { opc: string; tsp: string; clientName: string; lastDigits: string; address: object; }) => any
```

Push Provisionig

| Param         | Type                                                                                                |
| ------------- | --------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ opc: string; tsp: string; clientName: string; lastDigits: string; address: object; }</code> |

**Returns:** <code>any</code>

--------------------

</docgen-api>

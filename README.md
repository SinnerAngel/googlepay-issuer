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
getTokenStatus(tsp: string, tokenReferenceId: string) => any
```

returns the status of a token with a given token ID

| Param                  | Type                | Description                                                                               |
| ---------------------- | ------------------- | ----------------------------------------------------------------------------------------- |
| **`tsp`**              | <code>string</code> | Sets the TSP that should be used for the tokenization attempt (see TokenServiceProvider). |
| **`tokenReferenceId`** | <code>string</code> | token registered to the active wallet                                                     |

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
pushProvision(opc: string, tsp: string, clientName: string, lastDigits: string, address: object) => any
```

Push Provisionig

| Param            | Type                | Description                                                                               |
| ---------------- | ------------------- | ----------------------------------------------------------------------------------------- |
| **`opc`**        | <code>string</code> | Sets Opaque Payment Card binary data.                                                     |
| **`tsp`**        | <code>string</code> | Sets the TSP that should be used for the tokenization attempt (see TokenServiceProvider). |
| **`clientName`** | <code>string</code> | Sets the TSP that should be used for the tokenization attempt (see TokenServiceProvider). |
| **`lastDigits`** | <code>string</code> | Sets the TSP that should be used for the tokenization attempt (see TokenServiceProvider). |
| **`address`**    | <code>object</code> | Sets the TSP that should be used for the tokenization attempt (see TokenServiceProvider). |

**Returns:** <code>any</code>

--------------------

</docgen-api>

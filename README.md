# capacitor-plugin-googlepay-issuer

Plugin do Google Pay para o Capacitor

## Install

```bash
npm install capacitor-plugin-googlepay-issuer
npx cap sync
```

## API

<docgen-index>

* [`pushProvision(...)`](#pushprovision)
* [`getActiveWalletID()`](#getactivewalletid)
* [`getTokenStatus(...)`](#gettokenstatus)
* [`getEnvironment()`](#getenvironment)
* [`getStableHardwareId()`](#getstablehardwareid)
* [`listTokens()`](#listtokens)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### pushProvision(...)

```typescript
pushProvision(opc: string, tsp: string, clientName: string, lastDigits: string, address: object) => any
```

returns the ID of the active wallet

| Param            | Type                |
| ---------------- | ------------------- |
| **`opc`**        | <code>string</code> |
| **`tsp`**        | <code>string</code> |
| **`clientName`** | <code>string</code> |
| **`lastDigits`** | <code>string</code> |
| **`address`**    | <code>object</code> |

**Returns:** <code>any</code>

--------------------


### getActiveWalletID()

```typescript
getActiveWalletID() => any
```

**Returns:** <code>any</code>

--------------------


### getTokenStatus(...)

```typescript
getTokenStatus(tsp: string, tokenReferenceId: string) => any
```

| Param                  | Type                |
| ---------------------- | ------------------- |
| **`tsp`**              | <code>string</code> |
| **`tokenReferenceId`** | <code>string</code> |

**Returns:** <code>any</code>

--------------------


### getEnvironment()

```typescript
getEnvironment() => any
```

**Returns:** <code>any</code>

--------------------


### getStableHardwareId()

```typescript
getStableHardwareId() => any
```

**Returns:** <code>any</code>

--------------------


### listTokens()

```typescript
listTokens() => any
```

**Returns:** <code>any</code>

--------------------

</docgen-api>

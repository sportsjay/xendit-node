## PaymentMethod
You can use the APIs below to interface with Xendit's `PaymentMethod` API.
To start using the API, you need to destruct instantiated Xendit client or directly import the module and set the secret key.

```typescript
import { Xendit, PaymentMethod as PaymentMethodClient } from 'xendit-node';

const xenditClient = new Xendit({secretKey: YOUR_SECRET_KEY})
const { PaymentMethod } = xenditClient

const xenditPaymentMethodClient = new PaymentMethodClient({secretKey: YOUR_SECRET_KEY})

// At this point, `PaymentMethod` and `xenditPaymentMethodClient` will have no usage difference, for example:
// PaymentMethod.
// or
// xenditPaymentMethodClient.
```

All URIs are relative to https://api.xendit.co, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createPaymentMethod()**](PaymentMethod.md#createpaymentmethod-function) | **POST** /v2/payment_methods | Creates payment method |
| [**getPaymentMethodByID()**](PaymentMethod.md#getpaymentmethodbyid-function) | **GET** /v2/payment_methods/{paymentMethodId} | Get payment method by ID |
| [**getPaymentsByPaymentMethodId()**](PaymentMethod.md#getpaymentsbypaymentmethodid-function) | **GET** /v2/payment_methods/{paymentMethodId}/payments | Returns payments with matching PaymentMethodID. |
| [**patchPaymentMethod()**](PaymentMethod.md#patchpaymentmethod-function) | **PATCH** /v2/payment_methods/{paymentMethodId} | Patch payment methods |
| [**getAllPaymentMethods()**](PaymentMethod.md#getallpaymentmethods-function) | **GET** /v2/payment_methods | Get all payment methods by filters |
| [**expirePaymentMethod()**](PaymentMethod.md#expirepaymentmethod-function) | **POST** /v2/payment_methods/{paymentMethodId}/expire | Expires a payment method |
| [**authPaymentMethod()**](PaymentMethod.md#authpaymentmethod-function) | **POST** /v2/payment_methods/{paymentMethodId}/auth | Validate a payment method\&#39;s linking OTP |
| [**simulatePayment()**](PaymentMethod.md#simulatepaymentoperation-function) | **POST** /v2/payment_methods/{paymentMethodId}/payments/simulate | Makes payment with matching PaymentMethodID. |


## `createPaymentMethod()` Function


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `createPaymentMethod` |
| Request Parameters  |  [CreatePaymentMethodRequest](#request-parameters--CreatePaymentMethodRequest)	 |
| Return Type  |  [PaymentMethod](payment_method/PaymentMethod.md) |

### Request Parameters - CreatePaymentMethodRequest
| Field Name |   Type 	 |  Required  | Default |
|-----------|:----------:|:----------:|-----------|
| **forUserId** | **string** |  |  |
| **data** | [**PaymentMethodParameters**](payment_method/PaymentMethodParameters.md) |  |  |

### Usage Example
#### Account linking for E-Wallet

```typescript
import { PaymentMethodParameters, PaymentMethod } from 'xendit-node/payment_method/models'

const data: PaymentMethodParameters = {
  "ewallet" : {
    "channelProperties" : {
      "failureReturnUrl" : "https://redirect.me/failure",
      "successReturnUrl" : "https://redirect.me/success",
      "cancelReturnUrl" : "https://redirect.me/cancel"
    },
    "channelCode" : "OVO"
  },
  "metadata" : {
    "sku" : "example-1234"
  },
  "reusability" : "MULTIPLE_USE",
  "type" : "EWALLET",
  "customer" : {
    "type" : "INDIVIDUAL",
    "referenceId" : "customer-123",
    "individualDetail" : {
      "surname" : "Doe",
      "givenNames" : "John"
    }
  }
}

const response: PaymentMethod = await xenditPaymentMethodClient.createPaymentMethod({
    data
})
```
#### Account linking for PH Direct Debit

```typescript
import { PaymentMethodParameters, PaymentMethod } from 'xendit-node/payment_method/models'

const data: PaymentMethodParameters = {
  "mobileNumber" : 628774494404,
  "reusability" : "MULTIPLE_USE",
  "type" : "DIRECT_DEBIT",
  "directDebit" : {
    "channelProperties" : {
      "failureReturnUrl" : "https://redirect.me/failure",
      "successReturnUrl" : "https://redirect.me/success"
    },
    "channelCode" : "BPI"
  },
  "email" : "testemail@email.com",
  "customer" : {
    "type" : "INDIVIDUAL",
    "referenceId" : "customer-123",
    "individualDetail" : {
      "surname" : "Doe",
      "givenNames" : "John"
    }
  }
}

const response: PaymentMethod = await xenditPaymentMethodClient.createPaymentMethod({
    data
})
```
## `getPaymentMethodByID()` Function


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `getPaymentMethodByID` |
| Request Parameters  |  [GetPaymentMethodByIDRequest](#request-parameters--GetPaymentMethodByIDRequest)	 |
| Return Type  |  [PaymentMethod](payment_method/PaymentMethod.md) |

### Request Parameters - GetPaymentMethodByIDRequest
| Field Name |   Type 	 |  Required  | Default |
|-----------|:----------:|:----------:|-----------|
| **paymentMethodId** | **string** | ☑️ |  |
| **forUserId** | **string** |  |  |

### Usage Example
```typescript
import { PaymentMethod } from 'xendit-node/payment_method/models'

const response: PaymentMethod = await xenditPaymentMethodClient.getPaymentMethodByID({ 
    paymentMethodId: "pm-1fdaf346-dd2e-4b6c-b938-124c7167a822",
})
```
## `getPaymentsByPaymentMethodId()` Function


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `getPaymentsByPaymentMethodId` |
| Request Parameters  |  [GetPaymentsByPaymentMethodIdRequest](#request-parameters--GetPaymentsByPaymentMethodIdRequest)	 |
| Return Type  |  object |

### Request Parameters - GetPaymentsByPaymentMethodIdRequest
| Field Name |   Type 	 |  Required  | Default |
|-----------|:----------:|:----------:|-----------|
| **paymentMethodId** | **string** | ☑️ |  |
| **forUserId** | **string** |  |  |
| **paymentRequestId** | **string[]** |  |  |
| **paymentMethodId2** | **string[]** |  |  |
| **referenceId** | **string[]** |  |  |
| **paymentMethodType** | [**PaymentMethodType[]**](payment_method/PaymentMethodType.md) |  |  |
| **channelCode** | **string[]** |  |  |
| **status** | **string[]** |  |  |
| **currency** | **string[]** |  |  |
| **createdGte** | **Date** |  |  |
| **createdLte** | **Date** |  |  |
| **updatedGte** | **Date** |  |  |
| **updatedLte** | **Date** |  |  |
| **limit** | **number** |  |  |

### Usage Example
```typescript
import {  } from 'xendit-node/payment_method/models'

const response: object = await xenditPaymentMethodClient.getPaymentsByPaymentMethodId({ 
    paymentMethodId: "pm-1fdaf346-dd2e-4b6c-b938-124c7167a822",
})
```
## `patchPaymentMethod()` Function


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `patchPaymentMethod` |
| Request Parameters  |  [PatchPaymentMethodRequest](#request-parameters--PatchPaymentMethodRequest)	 |
| Return Type  |  [PaymentMethod](payment_method/PaymentMethod.md) |

### Request Parameters - PatchPaymentMethodRequest
| Field Name |   Type 	 |  Required  | Default |
|-----------|:----------:|:----------:|-----------|
| **paymentMethodId** | **string** | ☑️ |  |
| **forUserId** | **string** |  |  |
| **data** | [**PaymentMethodUpdateParameters**](payment_method/PaymentMethodUpdateParameters.md) |  |  |

### Usage Example
```typescript
import { PaymentMethod } from 'xendit-node/payment_method/models'

const response: PaymentMethod = await xenditPaymentMethodClient.patchPaymentMethod({ 
    paymentMethodId: "pm-1fdaf346-dd2e-4b6c-b938-124c7167a822",
})
```
## `getAllPaymentMethods()` Function


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `getAllPaymentMethods` |
| Request Parameters  |  [GetAllPaymentMethodsRequest](#request-parameters--GetAllPaymentMethodsRequest)	 |
| Return Type  |  [PaymentMethodList](payment_method/PaymentMethodList.md) |

### Request Parameters - GetAllPaymentMethodsRequest
| Field Name |   Type 	 |  Required  | Default |
|-----------|:----------:|:----------:|-----------|
| **forUserId** | **string** |  |  |
| **id** | **string[]** |  |  |
| **type** | **string[]** |  |  |
| **status** | [**PaymentMethodStatus[]**](payment_method/PaymentMethodStatus.md) |  |  |
| **reusability** | [**PaymentMethodReusability**](payment_method/PaymentMethodReusability.md) |  |  |
| **customerId** | **string** |  |  |
| **referenceId** | **string** |  |  |
| **afterId** | **string** |  |  |
| **beforeId** | **string** |  |  |
| **limit** | **number** |  |  |

### Usage Example
```typescript
import { PaymentMethodList } from 'xendit-node/payment_method/models'

const response: PaymentMethodList = await xenditPaymentMethodClient.getAllPaymentMethods({ })
```
## `expirePaymentMethod()` Function


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `expirePaymentMethod` |
| Request Parameters  |  [ExpirePaymentMethodRequest](#request-parameters--ExpirePaymentMethodRequest)	 |
| Return Type  |  [PaymentMethod](payment_method/PaymentMethod.md) |

### Request Parameters - ExpirePaymentMethodRequest
| Field Name |   Type 	 |  Required  | Default |
|-----------|:----------:|:----------:|-----------|
| **paymentMethodId** | **string** | ☑️ |  |
| **forUserId** | **string** |  |  |
| **data** | [**PaymentMethodExpireParameters**](payment_method/PaymentMethodExpireParameters.md) |  |  |

### Usage Example
```typescript
import { PaymentMethod } from 'xendit-node/payment_method/models'

const response: PaymentMethod = await xenditPaymentMethodClient.expirePaymentMethod({ 
    paymentMethodId: "pm-1fdaf346-dd2e-4b6c-b938-124c7167a822",
})
```
## `authPaymentMethod()` Function


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `authPaymentMethod` |
| Request Parameters  |  [AuthPaymentMethodRequest](#request-parameters--AuthPaymentMethodRequest)	 |
| Return Type  |  [PaymentMethod](payment_method/PaymentMethod.md) |

### Request Parameters - AuthPaymentMethodRequest
| Field Name |   Type 	 |  Required  | Default |
|-----------|:----------:|:----------:|-----------|
| **paymentMethodId** | **string** | ☑️ |  |
| **forUserId** | **string** |  |  |
| **data** | [**PaymentMethodAuthParameters**](payment_method/PaymentMethodAuthParameters.md) |  |  |

### Usage Example
```typescript
import { PaymentMethod } from 'xendit-node/payment_method/models'

const response: PaymentMethod = await xenditPaymentMethodClient.authPaymentMethod({ 
    paymentMethodId: "pm-1fdaf346-dd2e-4b6c-b938-124c7167a822",
})
```
## `simulatePayment()` Function


### Function Signature
| Name          |    Value 	     |
|--------------------|:-------------:|
| Function Name | `simulatePayment` |
| Request Parameters  |  [SimulatePaymentOperationRequest](#request-parameters--SimulatePaymentOperationRequest)	 |
| Return Type  |   (void)  |

### Request Parameters - SimulatePaymentOperationRequest
| Field Name |   Type 	 |  Required  | Default |
|-----------|:----------:|:----------:|-----------|
| **paymentMethodId** | **string** | ☑️ |  |
| **data** | [**SimulatePaymentRequest**](payment_method/SimulatePaymentRequest.md) |  |  |

### Usage Example
```typescript
import {  } from 'xendit-node/payment_method/models'

const response:  = await xenditPaymentMethodClient.simulatePayment({ 
    paymentMethodId: "pm-1fdaf346-dd2e-4b6c-b938-124c7167a822",
})
```

[[Back to README]](../README.md)
# EWalletChannelProperties

EWallet Channel Properties

## Properties

| Name | Type | Required | Description | Examples |
|------------|:-------------:|:-------------:|-------------|:-------------:|
| **successReturnUrl** | string |  | URL where the end-customer is redirected if the authorization is successful | | |
**failureReturnUrl** | string |  | URL where the end-customer is redirected if the authorization failed | | |
**cancelReturnUrl** | string |  | URL where the end-customer is redirected if the authorization cancelled | | |
**mobileNumber** | string |  | Mobile number of customer in E.164 format (e.g. +628123123123). For OVO one time payment use only. | | |
**redeemPoints** | string |  | REDEEM_NONE will not use any point, REDEEM_ALL will use all available points before cash balance is used. For OVO and ShopeePay tokenized payment use only. | | |
**cashtag** | string |  | Available for JENIUSPAY only | | |



[[Back to README]](../../README.md)
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */


/**
 * 
 * @export
 */
export const PaymentRequestCaptureMethod = {
    Automatic: 'AUTOMATIC',
    Manual: 'MANUAL',
    XenditEnumDefaultFallback: "UNKNOWN_ENUM_VALUE"
} as const;
export type PaymentRequestCaptureMethod = typeof PaymentRequestCaptureMethod[keyof typeof PaymentRequestCaptureMethod];


export function PaymentRequestCaptureMethodFromJSON(json: any): PaymentRequestCaptureMethod {
    return PaymentRequestCaptureMethodFromJSONTyped(json, false);
}

export function PaymentRequestCaptureMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentRequestCaptureMethod {
    if (json !== "" || json !== null) {
        const key = Object.keys(PaymentRequestCaptureMethod)[Object.values(PaymentRequestCaptureMethod).indexOf(json)]
        return PaymentRequestCaptureMethod[key] === undefined ?
            PaymentRequestCaptureMethod['XenditEnumDefaultFallback'] : PaymentRequestCaptureMethod[key]
    }
    return json as PaymentRequestCaptureMethod;
}

export function PaymentRequestCaptureMethodToJSON(value?: PaymentRequestCaptureMethod | null): any {
    return value as any;
}


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
export const PaymentRequestStatus = {
    Pending: 'PENDING',
    RequiresAction: 'REQUIRES_ACTION',
    Canceled: 'CANCELED',
    Succeeded: 'SUCCEEDED',
    Failed: 'FAILED',
    Voided: 'VOIDED',
    Unknown: 'UNKNOWN',
    AwaitingCapture: 'AWAITING_CAPTURE'
} as const;
export type PaymentRequestStatus = typeof PaymentRequestStatus[keyof typeof PaymentRequestStatus];


export function PaymentRequestStatusFromJSON(json: any): PaymentRequestStatus {
    return PaymentRequestStatusFromJSONTyped(json, false);
}

export function PaymentRequestStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentRequestStatus {
    return json as PaymentRequestStatus;
}

export function PaymentRequestStatusToJSON(value?: PaymentRequestStatus | null): any {
    return value as any;
}

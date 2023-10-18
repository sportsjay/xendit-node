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
export const PaymentRequestCountry = {
    Id: 'ID',
    Ph: 'PH',
    Vn: 'VN',
    Th: 'TH',
    My: 'MY',
    XenditEnumDefaultFallback: "UNKNOWN_ENUM_VALUE"
} as const;
export type PaymentRequestCountry = typeof PaymentRequestCountry[keyof typeof PaymentRequestCountry];


export function PaymentRequestCountryFromJSON(json: any): PaymentRequestCountry {
    return PaymentRequestCountryFromJSONTyped(json, false);
}

export function PaymentRequestCountryFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentRequestCountry {
    if (json !== "" || json !== null) {
        const key = Object.keys(PaymentRequestCountry)[Object.values(PaymentRequestCountry).indexOf(json)]
        return PaymentRequestCountry[key] === undefined ?
            PaymentRequestCountry['XenditEnumDefaultFallback'] : PaymentRequestCountry[key]
    }
    return json as PaymentRequestCountry;
}

export function PaymentRequestCountryToJSON(value?: PaymentRequestCountry | null): any {
    return value as any;
}


/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */


/**
 * Representing the currency used for an invoice.
 * @export
 */
export const InvoiceCurrency = {
    Idr: 'IDR',
    Usd: 'USD',
    Thb: 'THB',
    Vnd: 'VND',
    Php: 'PHP',
    XenditEnumDefaultFallback: "UNKNOWN_ENUM_VALUE"
} as const;
export type InvoiceCurrency = typeof InvoiceCurrency[keyof typeof InvoiceCurrency];


export function InvoiceCurrencyFromJSON(json: any): InvoiceCurrency {
    return InvoiceCurrencyFromJSONTyped(json, false);
}

export function InvoiceCurrencyFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceCurrency {
    if (json !== "" || json !== null) {
        const key = Object.keys(InvoiceCurrency)[Object.values(InvoiceCurrency).indexOf(json)]
        return InvoiceCurrency[key] === undefined ?
            InvoiceCurrency['XenditEnumDefaultFallback'] : InvoiceCurrency[key]
    }
    return json as InvoiceCurrency;
}

export function InvoiceCurrencyToJSON(value?: InvoiceCurrency | null): any {
    return value as any;
}


/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */


/**
 * EWallet Channel Code
 * @export
 */
export const EWalletChannelCode = {
    Gcash: 'GCASH',
    Grabpay: 'GRABPAY',
    Paymaya: 'PAYMAYA',
    Ovo: 'OVO',
    Dana: 'DANA',
    Linkaja: 'LINKAJA',
    Shopeepay: 'SHOPEEPAY',
    Sakuku: 'SAKUKU',
    Nexcash: 'NEXCASH',
    Astrapay: 'ASTRAPAY',
    Jeniuspay: 'JENIUSPAY',
    Appota: 'APPOTA',
    Momo: 'MOMO',
    Vnptwallet: 'VNPTWALLET',
    Viettelpay: 'VIETTELPAY',
    Zalopay: 'ZALOPAY',
    Wechatpay: 'WECHATPAY',
    Linepay: 'LINEPAY',
    Truemoney: 'TRUEMONEY',
    Alipay: 'ALIPAY'
} as const;
export type EWalletChannelCode = typeof EWalletChannelCode[keyof typeof EWalletChannelCode];


export function EWalletChannelCodeFromJSON(json: any): EWalletChannelCode {
    return EWalletChannelCodeFromJSONTyped(json, false);
}

export function EWalletChannelCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EWalletChannelCode {
    return json as EWalletChannelCode;
}

export function EWalletChannelCodeToJSON(value?: EWalletChannelCode | null): any {
    return value as any;
}

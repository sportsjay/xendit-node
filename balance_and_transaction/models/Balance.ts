/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
/**
 * The balance remaining in your account
 * @export
 * @interface Balance
 */
export interface Balance {
    /**
     * 
     * @type {number}
     * @memberof Balance
     */
    balance: number;
}

/**
 * Check if a given object implements the Balance interface.
 */
export function instanceOfBalance(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "balance" in value;

    return isInstance;
}

export function BalanceFromJSON(json: any): Balance {
    return BalanceFromJSONTyped(json, false);
}

export function BalanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Balance {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'balance': json['balance'],
    };
}

export function BalanceToJSON(value?: Balance | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'balance': value.balance,
    };
}

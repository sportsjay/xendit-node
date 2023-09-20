/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { PaymentMethod } from './PaymentMethod';
import {
    PaymentMethodFromJSON,
    PaymentMethodFromJSONTyped,
    PaymentMethodToJSON,
} from './PaymentMethod';

/**
 * 
 * @export
 * @interface PaymentMethodList
 */
export interface PaymentMethodList {
    /**
     * 
     * @type {Array<PaymentMethod>}
     * @memberof PaymentMethodList
     */
    data: Array<PaymentMethod>;
    /**
     * 
     * @type {boolean}
     * @memberof PaymentMethodList
     */
    hasMore?: boolean;
}

/**
 * Check if a given object implements the PaymentMethodList interface.
 */
export function instanceOfPaymentMethodList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function PaymentMethodListFromJSON(json: any): PaymentMethodList {
    return PaymentMethodListFromJSONTyped(json, false);
}

export function PaymentMethodListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethodList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(PaymentMethodFromJSON)),
        'hasMore': !exists(json, 'has_more') ? undefined : json['has_more'],
    };
}

export function PaymentMethodListToJSON(value?: PaymentMethodList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(PaymentMethodToJSON)),
        'has_more': value.hasMore,
    };
}

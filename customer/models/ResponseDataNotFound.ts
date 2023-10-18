/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
/**
 * 
 * @export
 * @interface ResponseDataNotFound
 */
export interface ResponseDataNotFound {
    /**
     * 
     * @type {string}
     * @memberof ResponseDataNotFound
     */
    errorCode?: ResponseDataNotFoundErrorCodeEnum;
    /**
     * 
     * @type {any}
     * @memberof ResponseDataNotFound
     */
    message?: any | null;
}


/**
 * @export
 */
export const ResponseDataNotFoundErrorCodeEnum = {
    DataNotFound: 'DATA_NOT_FOUND',
    EntityNotFoundError: 'ENTITY_NOT_FOUND_ERROR',
    ClientNotFoundError: 'CLIENT_NOT_FOUND_ERROR'
} as const;
export type ResponseDataNotFoundErrorCodeEnum = typeof ResponseDataNotFoundErrorCodeEnum[keyof typeof ResponseDataNotFoundErrorCodeEnum];


/**
 * Check if a given object implements the ResponseDataNotFound interface.
 */
export function instanceOfResponseDataNotFound(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResponseDataNotFoundFromJSON(json: any): ResponseDataNotFound {
    return ResponseDataNotFoundFromJSONTyped(json, false);
}

export function ResponseDataNotFoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseDataNotFound {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errorCode': !exists(json, 'error_code') ? undefined : json['error_code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function ResponseDataNotFoundToJSON(value?: ResponseDataNotFound | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error_code': value.errorCode,
        'message': value.message,
    };
}

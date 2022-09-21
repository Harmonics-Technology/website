/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ValuesService {

    /**
     * @param xApiKey 
     * @returns string Success
     * @throws ApiError
     */
    public static getApiValues(
xApiKey?: any,
): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Values',
            headers: {
                'X-API-KEY': xApiKey,
            },
        });
    }

    /**
     * @param xApiKey 
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiValues(
xApiKey?: any,
requestBody?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Values',
            headers: {
                'X-API-KEY': xApiKey,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param id 
     * @param xApiKey 
     * @returns string Success
     * @throws ApiError
     */
    public static getApiValues1(
id: number,
xApiKey?: any,
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Values/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-API-KEY': xApiKey,
            },
        });
    }

    /**
     * @param id 
     * @param xApiKey 
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static putApiValues(
id: number,
xApiKey?: any,
requestBody?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Values/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-API-KEY': xApiKey,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param id 
     * @param xApiKey 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiValues(
id: number,
xApiKey?: any,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Values/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-API-KEY': xApiKey,
            },
        });
    }

}

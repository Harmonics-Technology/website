/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ValuesService {

    /**
     * @returns string Success
     * @throws ApiError
     */
    public static getApiValues({
xApiKey,
}: {
xApiKey?: any,
}): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Values',
            headers: {
                'X-API-KEY': xApiKey,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static postApiValues({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: string,
}): CancelablePromise<any> {
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
     * @returns string Success
     * @throws ApiError
     */
    public static getApiValues1({
id,
xApiKey,
}: {
id: number,
xApiKey?: any,
}): CancelablePromise<string> {
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
     * @returns any Success
     * @throws ApiError
     */
    public static putApiValues({
id,
xApiKey,
requestBody,
}: {
id: number,
xApiKey?: any,
requestBody?: string,
}): CancelablePromise<any> {
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
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiValues({
id,
xApiKey,
}: {
id: number,
xApiKey?: any,
}): CancelablePromise<any> {
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

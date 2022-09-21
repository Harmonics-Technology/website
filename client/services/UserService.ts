/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InitiateResetModel } from '../models/InitiateResetModel';
import type { LoginModel } from '../models/LoginModel';
import type { PasswordReset } from '../models/PasswordReset';
import type { RegisterModel } from '../models/RegisterModel';
import type { UpdateUserModel } from '../models/UpdateUserModel';
import type { UserProfileViewStandardResponseTask } from '../models/UserProfileViewStandardResponseTask';
import type { UserViewStandardResponseTask } from '../models/UserViewStandardResponseTask';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * @param xApiKey 
     * @param requestBody 
     * @returns UserViewStandardResponseTask Success
     * @throws ApiError
     */
    public static create(
xApiKey?: any,
requestBody?: RegisterModel,
): CancelablePromise<UserViewStandardResponseTask> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/register',
            headers: {
                'X-API-KEY': xApiKey,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param xApiKey 
     * @param requestBody 
     * @returns UserViewStandardResponseTask Success
     * @throws ApiError
     */
    public static loginUser(
xApiKey?: any,
requestBody?: LoginModel,
): CancelablePromise<UserViewStandardResponseTask> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/login',
            headers: {
                'X-API-KEY': xApiKey,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param token 
     * @param xApiKey 
     * @returns UserViewStandardResponseTask Success
     * @throws ApiError
     */
    public static verify(
token: string,
xApiKey?: any,
): CancelablePromise<UserViewStandardResponseTask> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/verifyUser/{token}',
            path: {
                'token': token,
            },
            headers: {
                'X-API-KEY': xApiKey,
            },
        });
    }

    /**
     * @param redirectUrl 
     * @param xApiKey 
     * @param requestBody 
     * @returns UserViewStandardResponseTask Success
     * @throws ApiError
     */
    public static initiateReset(
redirectUrl?: string,
xApiKey?: any,
requestBody?: InitiateResetModel,
): CancelablePromise<UserViewStandardResponseTask> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/reset/initiate',
            headers: {
                'X-API-KEY': xApiKey,
            },
            query: {
                'redirectUrl': redirectUrl,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param xApiKey 
     * @param requestBody 
     * @returns UserViewStandardResponseTask Success
     * @throws ApiError
     */
    public static completeReset(
xApiKey?: any,
requestBody?: PasswordReset,
): CancelablePromise<UserViewStandardResponseTask> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/reset/complete',
            headers: {
                'X-API-KEY': xApiKey,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param xApiKey 
     * @param requestBody 
     * @returns UserViewStandardResponseTask Success
     * @throws ApiError
     */
    public static updateUser(
xApiKey?: any,
requestBody?: UpdateUserModel,
): CancelablePromise<UserViewStandardResponseTask> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/update',
            headers: {
                'X-API-KEY': xApiKey,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param password 
     * @param xApiKey 
     * @returns UserViewStandardResponseTask Success
     * @throws ApiError
     */
    public static updatePassword(
password?: string,
xApiKey?: any,
): CancelablePromise<UserViewStandardResponseTask> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/change_password',
            headers: {
                'X-API-KEY': xApiKey,
            },
            query: {
                'password': password,
            },
        });
    }

    /**
     * @param userId 
     * @param xApiKey 
     * @returns UserProfileViewStandardResponseTask Success
     * @throws ApiError
     */
    public static userProfile(
userId: string,
xApiKey?: any,
): CancelablePromise<UserProfileViewStandardResponseTask> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/user-profile/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'X-API-KEY': xApiKey,
            },
        });
    }

    /**
     * @param xApiKey 
     * @returns UserViewStandardResponseTask Success
     * @throws ApiError
     */
    public static validateToken(
xApiKey?: any,
): CancelablePromise<UserViewStandardResponseTask> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/validate-token',
            headers: {
                'X-API-KEY': xApiKey,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}

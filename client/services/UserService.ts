/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InitiateResetModel } from '../models/InitiateResetModel';
import type { LoginModel } from '../models/LoginModel';
import type { PasswordReset } from '../models/PasswordReset';
import type { RegisterModel } from '../models/RegisterModel';
import type { UpdateUserModel } from '../models/UpdateUserModel';
import type { UserProfileViewStandardResponse } from '../models/UserProfileViewStandardResponse';
import type { UserViewStandardResponse } from '../models/UserViewStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static create({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: RegisterModel,
}): CancelablePromise<UserViewStandardResponse> {
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
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static loginUser({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: LoginModel,
}): CancelablePromise<UserViewStandardResponse> {
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
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static verify({
token,
xApiKey,
}: {
token: string,
xApiKey?: any,
}): CancelablePromise<UserViewStandardResponse> {
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
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static initiateReset({
redirectUrl,
xApiKey,
requestBody,
}: {
redirectUrl?: string,
xApiKey?: any,
requestBody?: InitiateResetModel,
}): CancelablePromise<UserViewStandardResponse> {
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
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static completeReset({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: PasswordReset,
}): CancelablePromise<UserViewStandardResponse> {
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
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static updateUser({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: UpdateUserModel,
}): CancelablePromise<UserViewStandardResponse> {
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
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static updatePassword({
password,
xApiKey,
}: {
password?: string,
xApiKey?: any,
}): CancelablePromise<UserViewStandardResponse> {
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
     * @returns UserProfileViewStandardResponse Success
     * @throws ApiError
     */
    public static userProfile({
userId,
xApiKey,
}: {
userId: string,
xApiKey?: any,
}): CancelablePromise<UserProfileViewStandardResponse> {
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
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static validateToken({
xApiKey,
}: {
xApiKey?: any,
}): CancelablePromise<UserViewStandardResponse> {
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

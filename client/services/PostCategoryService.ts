/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostCategoryModel } from '../models/PostCategoryModel';
import type { PostCategoryViewListStandardResponse } from '../models/PostCategoryViewListStandardResponse';
import type { PostCategoryViewStandardResponse } from '../models/PostCategoryViewStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PostCategoryService {

    /**
     * @returns PostCategoryViewListStandardResponse Success
     * @throws ApiError
     */
    public static list({
xApiKey,
}: {
xApiKey?: any,
}): CancelablePromise<PostCategoryViewListStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/PostCategory/list',
            headers: {
                'X-API-KEY': xApiKey,
            },
        });
    }

    /**
     * @returns PostCategoryViewStandardResponse Success
     * @throws ApiError
     */
    public static get({
id,
xApiKey,
}: {
id: string,
xApiKey?: any,
}): CancelablePromise<PostCategoryViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/PostCategory/get/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-API-KEY': xApiKey,
            },
        });
    }

    /**
     * @returns PostCategoryViewStandardResponse Success
     * @throws ApiError
     */
    public static createPostCategory({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: PostCategoryModel,
}): CancelablePromise<PostCategoryViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/PostCategory/create',
            headers: {
                'X-API-KEY': xApiKey,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

}

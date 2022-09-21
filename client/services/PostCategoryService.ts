/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostCategoryModel } from '../models/PostCategoryModel';
import type { PostCategoryViewListStandardResponseTask } from '../models/PostCategoryViewListStandardResponseTask';
import type { PostCategoryViewStandardResponseTask } from '../models/PostCategoryViewStandardResponseTask';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PostCategoryService {

    /**
     * @param xApiKey 
     * @returns PostCategoryViewListStandardResponseTask Success
     * @throws ApiError
     */
    public static list(
xApiKey?: any,
): CancelablePromise<PostCategoryViewListStandardResponseTask> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/PostCategory/list',
            headers: {
                'X-API-KEY': xApiKey,
            },
        });
    }

    /**
     * @param id 
     * @param xApiKey 
     * @returns PostCategoryViewStandardResponseTask Success
     * @throws ApiError
     */
    public static get(
id: string,
xApiKey?: any,
): CancelablePromise<PostCategoryViewStandardResponseTask> {
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
     * @param xApiKey 
     * @param requestBody 
     * @returns PostCategoryViewStandardResponseTask Success
     * @throws ApiError
     */
    public static createPostCategory(
xApiKey?: any,
requestBody?: PostCategoryModel,
): CancelablePromise<PostCategoryViewStandardResponseTask> {
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

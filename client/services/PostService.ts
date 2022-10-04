/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostModel } from '../models/PostModel';
import type { PostViewPagedCollectionStandardResponse } from '../models/PostViewPagedCollectionStandardResponse';
import type { PostViewStandardResponse } from '../models/PostViewStandardResponse';
import type { UpdatePostModel } from '../models/UpdatePostModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PostService {

    /**
     * @returns PostViewStandardResponse Success
     * @throws ApiError
     */
    public static createPost({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: PostModel,
}): CancelablePromise<PostViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Post/create',
            headers: {
                'X-API-KEY': xApiKey,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @returns PostViewStandardResponse Success
     * @throws ApiError
     */
    public static updatePost({
xApiKey,
requestBody,
}: {
xApiKey?: any,
requestBody?: UpdatePostModel,
}): CancelablePromise<PostViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Post/update',
            headers: {
                'X-API-KEY': xApiKey,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @returns PostViewStandardResponse Success
     * @throws ApiError
     */
    public static getPost({
id,
xApiKey,
}: {
id: string,
xApiKey?: any,
}): CancelablePromise<PostViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Post/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-API-KEY': xApiKey,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @returns PostViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static getPosts({
offset,
limit,
search,
xApiKey,
}: {
offset?: number,
limit?: number,
search?: string,
xApiKey?: any,
}): CancelablePromise<PostViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Post/list',
            headers: {
                'X-API-KEY': xApiKey,
            },
            query: {
                'Offset': offset,
                'Limit': limit,
                'search': search,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @returns PostViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static getPostsByCategory({
categoryId,
offset,
limit,
search,
xApiKey,
}: {
categoryId: string,
offset?: number,
limit?: number,
search?: string,
xApiKey?: any,
}): CancelablePromise<PostViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Post/list/{categoryId}',
            path: {
                'categoryId': categoryId,
            },
            headers: {
                'X-API-KEY': xApiKey,
            },
            query: {
                'Offset': offset,
                'Limit': limit,
                'search': search,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * @returns PostViewStandardResponse Success
     * @throws ApiError
     */
    public static softDelete({
id,
xApiKey,
}: {
id: string,
xApiKey?: any,
}): CancelablePromise<PostViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Post/delete/soft/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-API-KEY': xApiKey,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

}

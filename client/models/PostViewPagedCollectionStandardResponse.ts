/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HttpStatusCode } from './HttpStatusCode';
import type { PostViewPagedCollection } from './PostViewPagedCollection';

export type PostViewPagedCollectionStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: PostViewPagedCollection;
    statusCode?: HttpStatusCode;
    errors?: any;
};

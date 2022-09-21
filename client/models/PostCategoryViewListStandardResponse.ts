/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HttpStatusCode } from './HttpStatusCode';
import type { PostCategoryView } from './PostCategoryView';

export type PostCategoryViewListStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: Array<PostCategoryView> | null;
    statusCode?: HttpStatusCode;
    errors?: any;
};

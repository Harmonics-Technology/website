/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HttpStatusCode } from './HttpStatusCode';
import type { PostCategoryView } from './PostCategoryView';

export type PostCategoryViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: PostCategoryView;
    statusCode?: HttpStatusCode;
    errors?: any;
};

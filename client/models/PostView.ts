/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserView } from './UserView';

export type PostView = {
    title?: string | null;
    content?: string | null;
    thumbnail?: string | null;
    categoryName?: string | null;
    createdBy?: UserView;
};

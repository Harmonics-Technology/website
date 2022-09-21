/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AggregateException } from './AggregateException';
import type { PostCategoryViewStandardResponse } from './PostCategoryViewStandardResponse';
import type { TaskCreationOptions } from './TaskCreationOptions';
import type { TaskStatus } from './TaskStatus';

export type PostCategoryViewStandardResponseTask = {
    readonly id?: number;
    exception?: AggregateException;
    status?: TaskStatus;
    readonly isCanceled?: boolean;
    readonly isCompleted?: boolean;
    readonly isCompletedSuccessfully?: boolean;
    creationOptions?: TaskCreationOptions;
    readonly asyncState?: any;
    readonly isFaulted?: boolean;
    result?: PostCategoryViewStandardResponse;
};

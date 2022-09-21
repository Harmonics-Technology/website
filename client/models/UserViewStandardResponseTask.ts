/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AggregateException } from './AggregateException';
import type { TaskCreationOptions } from './TaskCreationOptions';
import type { TaskStatus } from './TaskStatus';
import type { UserViewStandardResponse } from './UserViewStandardResponse';

export type UserViewStandardResponseTask = {
    readonly id?: number;
    exception?: AggregateException;
    status?: TaskStatus;
    readonly isCanceled?: boolean;
    readonly isCompleted?: boolean;
    readonly isCompletedSuccessfully?: boolean;
    creationOptions?: TaskCreationOptions;
    readonly asyncState?: any;
    readonly isFaulted?: boolean;
    result?: UserViewStandardResponse;
};

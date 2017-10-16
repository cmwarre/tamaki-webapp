/**
 * Created by cwarren on 10/16/17.
 */

import * as types from './action-types';

export function getTestSuccess(message) {

    return {
        type: types.GET_TEST_SUCCESS,
        message: message
    };
}
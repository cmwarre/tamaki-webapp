/**
 * Created by cwarren on 10/16/17.
 */
import * as types from '../actions/action-types';

const initialState = {
    message: ""
};

const testReducer = function(state = initialState, action) {

  switch(action.type) {
    case types.GET_TEST_SUCCESS:
      return Object.assign({}, state, { message: action.message });
    default:
      return state;
  }

};

export default testReducer;
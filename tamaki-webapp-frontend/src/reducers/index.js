
import { combineReducers } from 'redux';

import testReducer from './test-reducer';

// Reducers

// Combine Reducers
var reducers = combineReducers({
    testState: testReducer
});

export default reducers;
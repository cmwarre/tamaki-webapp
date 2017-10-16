/**
 * Created by cwarren on 10/16/17.
 */
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);//, persistedState);

export default store;
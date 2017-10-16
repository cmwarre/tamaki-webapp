import axios from 'axios';
import store from '../store';
import * as testActions from '../actions/test-actions';

export function getTest(onSuccess, onFailure) {
    axios.get("http://localhost:8080/api/v1/test/").then(response => {
        store.dispatch(testActions.getTestSuccess(response.data.message));
        return response;
    });
}
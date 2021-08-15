import { createStore, applyMiddleware, compose } from "redux";
import allReducers from './ducks';
import thunk from 'redux-thunk'

const middleware = [thunk]
const store = createStore(allReducers, compose(
    applyMiddleware(...middleware)));

export default store;
import {createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk';

const configureStore = (preloadedState:any) => createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
);

export default configureStore

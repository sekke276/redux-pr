import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './reducers';
import rootWatcher from './watchers';

const saga = createSagaMiddleware();
const midleWare = [saga];
const store = createStore(rootReducer,applyMiddleware(...midleWare));
saga.run(rootWatcher);

export default store;
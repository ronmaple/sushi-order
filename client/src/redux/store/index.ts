import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import rootReducer from '../reducers/root.reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

console.log('initialState', store.getState());

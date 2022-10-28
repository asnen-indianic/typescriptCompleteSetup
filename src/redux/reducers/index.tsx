import {combineReducers, StoreCreator, applyMiddleware} from 'redux';
import {legacy_createStore} from 'redux';

import authReducer from './authReducer';
import thunk from 'redux-thunk';

export default legacy_createStore(
  combineReducers({
    authReducer,
  }),
  applyMiddleware(thunk),
);

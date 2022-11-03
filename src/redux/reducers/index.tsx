// import {combineReducers, StoreCreator, applyMiddleware} from 'redux';
// import {legacy_createStore} from 'redux';

// import authReducer from './authReducer';
// import thunk from 'redux-thunk';

// export default legacy_createStore(
//   combineReducers({
//     authReducer,
//   }),
//   applyMiddleware(thunk),
// );

import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import todos from './todos';

const reducer = combineReducers({
  todos,
});

const store = configureStore({
  reducer,
});

export default store;

import React from 'react';
import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
// import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducer';

const middleware =  applyMiddleware( thunk, promise, logger)

const store = createStore(
  rootReducer,
  compose(
    middleware,
  )
)
// const middleware = applyMiddleware(thunk,promise, logger);

// const store = createStore(
//   rootReducer, 
//   composeWithDevTools(
//     middleware
//     )
//   );
export default store

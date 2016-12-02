import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import reducer from './reducer';

// Initialze our store with a few basic middlewares
export default () => {
  const middlewares = [promise, thunk];

  // Logger middleware for local development
  if (process.env.NODE_ENV !== 'production') {
    const logger = require('redux-logger')();
    middlewares.push(logger);
  }

  return createStore(
    reducer,
    applyMiddleware(...middlewares)
  );
};


import { combineReducers, createStore, applyMiddleware } from 'redux';
import words from './words';
import synonyms from './synonyms';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

export default createStore(
  combineReducers({
    words,
    synonyms
  }),
  composeWithDevTools(
    applyMiddleware(
      thunk,
      loggerMiddleware
    )
  )
);
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer, { initialState as exampleInitialState } from './reducer';
//import rootSaga from './saga';
import rootSaga from './saga';


const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(middleware));
  }
  return applyMiddleware(middleware);
};

function configureStore(initialState = exampleInitialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware(sagaMiddleware),
  );

  //store.sagaTask = sagaMiddleware.run(rootSaga);
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;

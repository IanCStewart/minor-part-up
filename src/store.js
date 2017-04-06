/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }] */
import { createStore, applyMiddleware } from 'redux';
import io from 'socket.io-client';
import rootReducer from './reducers/root';
import createSocketMiddleware from './socketMiddleWare';

const socket = io('localhost:3000');

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(createSocketMiddleware(socket))
);

export default store;

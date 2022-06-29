import React from 'react';
import ReactDOM from 'react-dom/client';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { setButtonState, setData } from './reducers'

import thunkMiddleware  from 'redux-thunk';

import './index.css';
import App from './App';

const logger = createLogger();
const rootReducers = combineReducers({setButtonState, setData})
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App  />
  </Provider>
);

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './components/App';
import INITIAL_STATE from './constant/initialState';
import rootReducer from './reducers';
import './styles/index.scss';

const STATE = { books: INITIAL_STATE };

const middleware = [thunk];

const store = createStore(rootReducer, STATE,
  compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
                            && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

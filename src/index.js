/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

const initialState = {
  books: [
    {
      id: Math.round(100 * Math.random()),
      title: 'Pirate of carribbean',
      category: 'Adventure',
    },
    {
      id: Math.round(200 * Math.random()),
      title: 'Babies day out',
      category: 'kids',
    },
    {
      id: Math.round(300 * Math.random()),
      title: 'Game of thrones',
      category: 'Action',
    },
    {
      id: Math.round(400 * Math.random()),
      title: 'Blade runner',
      category: 'Sci-fi',
    },
    {
      id: Math.round(500 * Math.random()),
      title: 'Ghost Buster',
      category: 'Horror',
    },
  ],
};

const middleware = [thunk];

const store = createStore(rootReducer, initialState,
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

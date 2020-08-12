/* eslint-disable linebreak-style */
import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import '../styles/App.scss';

const App = () => (
  <div className>
    <BooksList />
    <br />
    <BooksForm />
  </div>
);

export default App;

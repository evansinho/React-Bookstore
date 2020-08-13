/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.scss';

const Book = ({ book, removeBook }) => (
  <div className="book-container">
    <div className="col-md-5">
      <div className="book-category">{ book.category }</div>
      <div className="book-title">{ book.title }</div>
      <div className="action-container">
        <button type="button" className="disable-btn-border btn-padding-right btnlink"> Comment</button>
        <button type="button" className="disable-btn-border btn-padding-right btn-padding-left btnlink" id={book.id} onClick={() => removeBook(book.id)}> Remove</button>
        <button type="button" className="btnlink btn-padding-left disable-btn-border-none"> Edit</button>
      </div>
    </div>
    <div className="col-md-4 hide-on-small-screen">
      <div className="radialProgressBar progress-10 float-left">
        <div className="overlay" />
      </div>
      <div className="completed">
        <p> 10% </p>
        <span> Completed</span>
      </div>
    </div>
    <div className="col-md-3 hide-on-small-screen">
      <p className="m-0 color-12121">CURRENT CHAPTER</p>
      <strong className="chapter"> Chapter 10</strong>
      <button type="button" className="btn btn-primary mt-4 d-block">UPDATE PROGRESS</button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({}).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;

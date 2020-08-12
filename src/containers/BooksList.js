/* eslint-disable arrow-body-style */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from '../components/CategoryFilter';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import '../styles/BooksList.scss';
import userImage from '../assets/images/user.png';

const BooksList = ({
  books, removeBook, changeFilter, filter,
}) => {
  const handleFilterChange = e => {
    const { value } = e.target;
    changeFilter(value);
  };

  const filteredBooks = () => (filter === 'ALL' ? books : books.filter(book => book.category === filter));

  return (
    <div>
      <div className="main-container">
        <div className="nav-container d-flex">
          <div className="logo"> Bookstore CMS</div>
          <CategoryFilter handleChange={handleFilterChange} />
          <div className="image-container">
            <img src={userImage} alt="user" />
          </div>
        </div>
      </div>
      {
      filteredBooks().map(book => (
        <Book
          key={book.id}
          book={book}
          removeBook={removeBook}
        />
      ))
}
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.shape([]).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

export default connect(mapStateToProps, { removeBook, changeFilter })(BooksList);

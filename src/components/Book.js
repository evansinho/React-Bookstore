import React from 'react';
import PropTypes from 'prop-types';

const Book = ( {book} ) => ( 
  <tr>
    <td> {book.id} </td>
    <td> {book.title} </td>
    <td> {book.category} </td>
  </tr>
);

Book.proptypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}

export default Book;
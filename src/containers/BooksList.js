/* eslint-disable arrow-body-style */
import React from 'react';

const BooksList = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Game of thrones</td>
            <td>Adventure</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;

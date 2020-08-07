/* eslint-disable arrow-body-style */
import React from 'react';

const BooksList = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
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

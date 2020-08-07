/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const BooksForm = () => (
  <div>
    <form>
      <div className="form-group">
        <label htmlFor="title" />
        <input type="text" placeholder="Enter title" />
      </div>
      <div className="form-group">
        <label htmlFor="title" />
        <input type="text" placeholder="Enter category" />
      </div>
    </form>
  </div>
);

export default BooksForm;

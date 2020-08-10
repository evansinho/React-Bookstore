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
        <select name="category">
          <option selected>All Category</option>
          <option value="action" name="action">Action</option>
          <option value="biography" name="kbiography">Biography</option>
          <option value="horror" name="horror">Horror</option>
          <option value="history" name="history">History</option>
          <option value="kids" name="kids">Kids</option>
          <option value="learning" name="learning">Learning</option>
          <option value="sci-fi" name="sci-fi">Sic-Fi</option>
        </select>
      </div>
    </form>
  </div>
);

export default BooksForm;

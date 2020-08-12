import React from 'react';
import PropTypes from 'prop-types';
import categories from '../constant/category';

const CategoryFilter = ({ handleChange }) => (
  <div className="header">
    <label htmlFor="category" className="mt-2">
      BOOKS
      <select name="category" className="delete-bgcolor ml-4" onChange={handleChange}>
        <option value="ALL">categories</option>
        { categories.map(category => (
          <option key={category} value={category}>
            { category }
          </option>
        ))}
      </select>
    </label>
  </div>
);

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;

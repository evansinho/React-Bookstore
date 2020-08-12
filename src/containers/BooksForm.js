/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v1 as uuidv1 } from 'uuid';
import { createBook } from '../actions';
import categories from '../constant/category';
import '../styles/BooksForm.scss';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    const newBook = {
      id: uuidv1(),
      title,
      category,
    };
    if (title && category) {
      createBook(newBook);

      this.setState({
        title: '',
        category: '',
      });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="form-container">
        <div className="form-title">ADD NEW BOOK</div>
        <form onSubmit={this.handleSubmit} className="row">
          <div className="col-md-7 bg-white">
            <input
              type="text"
              className="w-100"
              onChange={this.handleChange}
              value={title}
              name="title"
              placeholder="Book title"
            />
          </div>
          <div className="col-md-3">
            <select name="category" value={category} className="w-100 h-full" onChange={this.handleChange} id="category">
              { categories.map(category => (
                <option key={category}>
                  { category }
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-2">
            <button value="submit" className="btn btn-primary full-render" type="submit"> ADD BOOK </button>
          </div>
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
export default connect(null, { createBook })(BooksForm);

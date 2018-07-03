/**
 * A form for creating new feed subscriptions
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import './FeedForm.css';

export class FeedForm extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      title: '',
      url: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearInputs() {
    this.setState({title: '', url: ''});
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const title = this.state.title.trim();
    const url = this.state.url.trim();

    if (title.length && url.length) this.props.handleSubmit(title, url);
    this.clearInputs();
  }

  render() {
    return (
      <form className="FeedForm" onSubmit={this.handleSubmit} noValidate>
        <p>
          <label htmlFor="id_title">Title</label>
          <input
            autoComplete="off"
            id="id_title"
            maxLength="64"
            name="title"
            onChange={this.handleChange}
            placeholder='Title'
            type="text"
            value={this.state.title}
          />
        </p>
        <p>
          <label htmlFor="id_url">URL</label>
          <input
            autoComplete="off"
            id="id_url"
            maxLength="200"
            name="url"
            onChange={this.handleChange}
            placeholder='URL'
            type="text"
            value={this.state.url}
          />
        </p>
        <p>
          <Button className='FeedForm__button' type='submit'>Subscribe</Button>
        </p>
      </form>
    );
  }
}

FeedForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default FeedForm;

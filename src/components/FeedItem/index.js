/**
 * An individual feed in the user's subscription list
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import './FeedItem.css';

export class FeedItem extends Component {
  constructor() {
    super(...arguments);
    this.delete = this.delete.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  delete(feed) {
    this.props.deleteFeed(feed);
  }

  refresh(feed) {
    this.props.refreshFeed(feed);
  }

  render() {
    const feed = this.props.feed;

    return (
      <li className='FeedItem'>
        <span className='FeedItem__desc'>
          <span className='FeedItem__title'>{feed.title}</span>
          <span className='FeedItem__url'>{feed.url}</span>
        </span>
        <span className='FeedItem__actions'>
          <Button
            className='FeedItem__delete'
            onClick={() => this.delete(feed)}
          >
            Unsubscribe
          </Button>
          <Button
            className='FeedItem__refresh'
            onClick={() => this.refresh(feed)}
          >
            Refresh
          </Button>
        </span>
      </li>
    );
  }
}

FeedItem.propTypes = {
  deleteFeed: PropTypes.func.isRequired,
  feed: PropTypes.object.isRequired,
  refreshFeed: PropTypes.func.isRequired,
};

export default FeedItem;

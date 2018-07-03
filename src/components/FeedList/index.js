/**
 * A list of RSS feeds the user has subscribed to, along with a form to add
 * new subscriptions.
 */

import React from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';

import FeedForm from '../FeedForm';
import FeedItem from '../FeedItem';

import './FeedList.css';

const FeedList = ({createFeed, deleteFeed, feeds, refreshFeed}) => {
  let feedItems = feeds.map((feed, index) => {
    return (
      <FeedItem
        deleteFeed={deleteFeed}
        key={index}
        feed={feed}
        refreshFeed={refreshFeed}
      />
    );
  });

  return (
    <aside className='FeedList'>
      <h2 className='FeedList__title'>Subscriptions</h2>
      <ul className="FeedList__list">
        {feedItems}
      </ul>
      <h3 className='FeedList__subtitle'>Add Feed</h3>
      <FeedForm handleSubmit={createFeed} />
    </aside>
  );
};

FeedList.propTypes = {
  createFeed: PropTypes.func.isRequired,
  deleteFeed: PropTypes.func.isRequired,
  feeds: PropTypes.instanceOf(List),
  refreshFeed: PropTypes.func.isRequired
};

export default FeedList;

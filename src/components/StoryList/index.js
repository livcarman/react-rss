/**
 * A list of stories from the RSS feed, grouped by Feed.
 */

import React from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';

import FeedStories from '../FeedStories';
import LoadingIndicator from '../LoadingIndicator';

import './StoryList.css';

const StoryList = ({feeds, feedsLoading}) => {
  const feedStories = feedsLoading
    ? <LoadingIndicator />
    : feeds
        .filter((feed) => feed.stories.length > 0)
        .map((feed, index) => {
          return (
            <FeedStories
              key={index}
              feed={feed}
            />
          );
        });

  return (
    <div className='StoryList'>
      {feedStories}
    </div>
  );
};

StoryList.propTypes = {
  feedsLoading: PropTypes.bool.isRequired,
  feeds: PropTypes.instanceOf(List),
};

export default StoryList;

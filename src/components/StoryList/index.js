/**
 * A list of stories from the RSS feed, grouped by Feed.
 */

import React from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';

import FeedStories from '../FeedStories';

import './StoryList.css';

const StoryList = ({feeds}) => {
  let feedStories = feeds
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
  feeds: PropTypes.instanceOf(List),
};

export default StoryList;

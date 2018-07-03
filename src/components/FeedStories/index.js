/**
 * A list of stories from the RSS feed.
 */

import React from 'react';
import PropTypes from 'prop-types';

import StoryItem from '../StoryItem';

import './FeedStories.css';

const FeedStories = ({feed}) => {
  let stories = feed.stories.map((story, index) => {
    return (
      <StoryItem
        key={index}
        story={story}
      />
    );
  });

  return (
    <section className='FeedStories'>
      <h2 className='FeedStories__title'>{feed.title}</h2>
      <ul className='FeedStories__list'>
        {stories}
      </ul>
    </section>
  );
};

FeedStories.propTypes = {
  feed: PropTypes.object.isRequired,
};

export default FeedStories;

/**
 * An individual story from an RSS feed
 */

import React from 'react';
import PropTypes from 'prop-types';

import './StoryItem.css';

const StoryItem = ({ story }) => {
  const isoDate = story.isoDate ? story.isoDate : story.pubDate;
  const d = new Date(isoDate);
  const prettyDate = `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`;

  return (
    <li className='StoryItem'>
      <time dateTime={isoDate} className='StoryItem__time'>
        {prettyDate}
      </time>
      <span className='StoryItem__title'>
        <a href={story.link} target='_blank' rel="noopener noreferrer">
          {story.title}
        </a>
      </span>
    </li>
  );
}

StoryItem.propTypes = {
  story: PropTypes.object.isRequired,
};

export default StoryItem;

/**
 * An SVG RSS feed icon, with (simulated) alt text for screen readers
 */

import PropTypes from 'prop-types';
import React from 'react';

const IconRSS = ({ alt = '', className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} role="img" aria-label={alt}>
    <title>{alt}</title>
    <path fill="none" d="M0 0h24v24H0z"/>
    <circle cx="6.18" cy="17.82" r="2.18"/>
    <path
      d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"
    />
  </svg>
);

IconRSS.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default IconRSS;

/**
 * An SVG GitHub icon, with (simulated) alt text for screen readers
 */

import PropTypes from 'prop-types';
import React from 'react';

const IconGitHub = ({ alt = '', className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} role="img" aria-label={alt}>
    <title>{alt}</title>
    <path
      d="M10 0C4.5 0 0 4.5 0 10c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.9c-2.5.5-3.2-.6-3.4-1.1-.1-.3-.6-1.2-1-1.4-.4-.2-.9-.6 0-.7.8 0 1.3.7 1.5 1 .9 1.5 2.4 1.1 3 .9.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.7 0-.3-.4-1.3.2-2.7 0 0 .8-.3 2.8 1 .7-.2 1.6-.3 2.4-.3s1.7.1 2.5.3c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.3 6.8-5.1 6.8-9.5C20 4.5 15.5 0 10 0z"
    />
  </svg>
);

IconGitHub.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default IconGitHub;

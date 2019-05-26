/**
 * A loading indicator to render instead of pending content
 */
import React from 'react';

import './LoadingIndicator.css';

const LoadingIndicator = () => (
  <div className='LoadingIndicator'>
    <span className='LoadingIndicator__screen-reader-txt'>
      Loading...
    </span>
  </div>
);

export default LoadingIndicator;

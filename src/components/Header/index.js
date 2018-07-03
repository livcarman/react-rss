/**
 * The site's header, which is displayed on every page.
 */

import PropTypes from 'prop-types';
import React from 'react';

import Button from '../Button';
import IconRSS from '../IconRSS';

import './Header.css';

const Header = ({authenticated, signOut}) => (
  <header className="Header">
    <div className="Header__inner">
      <h1 className="Header__title">
        <IconRSS className="Header__logo" />&nbsp;
        React RSS
      </h1>
      <ul className="Header__actions">
        {authenticated ?
          <li>
            <Button className="Header__link" onClick={signOut}>Sign Out</Button>
          </li>
          :
          null
        }
        <li>
          <a
            className="Header__link"
            href="https://github.com/livcarman/react-rss"
            rel="noopener noreferrer"
            target="_blank"
          >
            View Source
          </a>
        </li>
      </ul>
    </div>
  </header>
);

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};

export default Header;

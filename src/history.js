/**
 * The history object provides an thin abstraction layer over the HTML5 browser
 * history API. It's used throughout the codebase to manage navigation events.
 *
 * The HTML5 history API is supported in all modern browsers except Opera Mini.
 * See: https://caniuse.com/#feat=history
 */

import createHistory from 'history/createBrowserHistory';

export default createHistory({
  basename: '/'
});

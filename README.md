# React RSS

A simple RSS reader implemented with [React][react], [redux][redux],
[redux-saga][redux-saga], and [Firebase][firebase]. It really just exists as a
demonstration of how Firebase can be used as the backend to a SPA.

Check out the [live demo][demo].

## Getting Started

Most RSS feeds are not served with CORS headers that would allow a cross-origin
request from a browser. As a result, this app uses a small server application
to proxy requests for RSS feeds. When you run the app, you need to run both
the app itself and the proxy server if you want to be able to use many popular
RSS feeds like Reddit and the NY Times.

To start the development server and the CORS proxy:

```bash
$ git clone https://github.com/livcarman/react-rss.git
$ cd react-rss
$ yarn install
$ yarn start
```

The CORS proxy will run on port 8080. The app server will be available
at http://localhost:3000/ .

## Deployment

### Deploying the CORS Proxy Server

By default, the app will use an instance of the CORS proxy that's running on
Heroku's free tier (https://cryptic-stream-54074.herokuapp.com/). You can (and
should) host your own instance of the CORS proxy.

To host your own CORS proxy on Heroku's free tier:

1. Sign up for a free Heroku account at https://heroku.com/
2. Download the Heroku command-line tools
3. Deploy the CORS proxy to Heroku:

```bash
$ heroku login
$ heroku create
$ git push heroku master
$ heroku ps:scale web=1
```

You can verify that the CORS proxy is running with:

```bash
$ heroku open
```

Now, open `src/sagas/feed.js` in your text editor and replace
`https://cryptic-stream-54074.herokuapp.com/` with the URL of the Heroku app
you just deployed. Remember to include the trailing slash at the end of the
URL: it's important!

### Deploying the React App

1. Create a Firebase account at https://firebase.google.com
2. Create a project from the Firebase console
3. Enable authentication with Google and GitHub (this is done in the Firebase
   console, under "Authentication")
4. Update `.firebaserc` with your Firebase project name
5. Update `src/firebase.js` with your Firebase project settings (you can get
   these from the Firebase console, under "Add Firebase to your web app" in the
   project overview)

When all of those steps have been completed, you can build and deploy the app:

```bash
$ yarn run build
$ yarn run firebase login
$ yarn run firebase use default
$ yarn run firebase deploy
```

## License & Credits

React RSS is released under the terms of the MIT license. See `LICENSE` for
details.

React RSS uses some icons from Google's [Material Icons][material] collection.
These icons are released under the Apache 2.0 license. Refer to their
[project page][material-repo] for more details.

Finally, some of the code in this project was adapted from
[todo-redux-saga][todo-redux-saga], another MIT-licensed demo app that shows
how React and Firebase can be used together.

[demo]: https://react-rss-a0754.firebaseapp.com
[firebase]: https://firebase.google.com/
[material]: https://material.io/tools/icons/
[material-repo]: https://github.com/google/material-design-icons
[react]: https://reactjs.org
[redux]: https://redux.js.org/
[redux-saga]: https://github.com/redux-saga/redux-saga
[todo-redux-saga]: https://github.com/r-park/todo-redux-saga

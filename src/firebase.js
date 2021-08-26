/**
 * Configuration and initialization of Firebase, the app's backend.
 *
 * See: https://firebase.google.com
 */

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

// These settings are taken from the project overview in the Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAzgNCgYIcwDWyaOXKofjQsUzC-Fz9cMj4",
  authDomain: "react-rss-a0754.firebaseapp.com",
  databaseURL: "https://react-rss-a0754.firebaseio.com",
  projectId: "react-rss-a0754",
  storageBucket: "react-rss-a0754.appspot.com",
  messagingSenderId: "375813021173"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth();
export const firebaseDb = firebase.database();

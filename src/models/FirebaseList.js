/**
 * This class makes it possible to easily manage a list of objects that are
 * stored in Firebase's database.
 *
 * Source: https://github.com/r-park/todo-redux-saga/
 */

import { firebaseDb } from '../firebase';

export class FirebaseList {
  constructor(actions, modelClass) {
    this._actions = actions;
    this._modelClass = modelClass;
  }

  get path() {
    return this._path;
  }

  set path(value) {
    this._path = value;
  }

  push(value) {
    return new Promise((resolve, reject) => {
      firebaseDb.ref(this.path)
        .push(value, error => error ? reject(error) : resolve());
    });
  }

  remove(key) {
    return new Promise((resolve, reject) => {
      firebaseDb.ref(`${this.path}/${key}`)
        .remove(error => error ? reject(error) : resolve());
    });
  }

  update(key, value) {
    return new Promise((resolve, reject) => {
      firebaseDb.ref(`${this.path}/${key}`)
        .update(value, error => error ? reject(error) : resolve());
    });
  }

  subscribe(emit) {
    let ref = firebaseDb.ref(this.path);
    let initialized = false;
    let list = [];

    ref.once('value', () => {
      initialized = true;
      emit(this._actions.onLoad(list));
    });

    ref.on('child_added', snapshot => {
      if (initialized) {
        emit(this._actions.onAdd(this.unwrapSnapshot(snapshot)));
      }
      else {
        list.push(this.unwrapSnapshot(snapshot));
      }
    });

    ref.on('child_changed', snapshot => {
      emit(this._actions.onChange(this.unwrapSnapshot(snapshot)));
    });

    ref.on('child_removed', snapshot => {
      emit(this._actions.onRemove(this.unwrapSnapshot(snapshot)));
    });

    return () => ref.off();
  }

  unwrapSnapshot(snapshot) {
    let attrs = snapshot.val();
    attrs.key = snapshot.key;
    return new this._modelClass(attrs);
  }
}

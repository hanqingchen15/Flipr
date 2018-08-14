import React from 'react';
import ReactDOM from 'react-dom';
import * as session from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
import * as photos from './actions/photo_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = session.login;
  window.logout = session.logout;
  window.signup = session.signup;
  window.requestAllPhotos = photos.requestAllPhotos;
  window.receiveAllPhotos = photos.receiveAllPhotos;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

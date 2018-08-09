import React from 'react';
import ReactDOM from 'react-dom';
import * as session from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = session.login;
  window.logout = session.logout;
  window.signup = session.signup;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

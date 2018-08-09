import React from 'react';
import ReactDOM from 'react-dom';
import * as session from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.login = session.login;
  window.logout = session.logout;
  window.signup = session.signup;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>work in progress</h1>, root);
});

import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import PhotoIndexContainer from './photo/photo_index_container';
import PhotoUserContainer from './photo/photo_user_container';
import PhotoFormContainer from './photo/photo_form_container';
import { HashRouter, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <ProtectedRoute exact path="/explore" component={PhotoIndexContainer} />
    <ProtectedRoute exact path="/myphotos" component={PhotoUserContainer} />
    <ProtectedRoute exact path="/create" component={PhotoFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;

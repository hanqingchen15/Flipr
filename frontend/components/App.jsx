import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import PhotoIndexContainer from './photo/photo_index_container';
import PhotoUserContainer from './photo/photo_user_container';
import PhotoCreateContainer from './photo/photo_create_container';
import PhotoUpdateContainer from './photo/photo_update_container';
import PhotoShowContainer from './photo/photo_show_container';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>

    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/explore" component={PhotoIndexContainer} />
      <ProtectedRoute exact path="/myphotos" component={PhotoUserContainer} />
      <ProtectedRoute exact path="/create" component={PhotoCreateContainer} />
      <ProtectedRoute exact path="/update" component={PhotoUpdateContainer} />
      <ProtectedRoute exact path='/photos/:photoId' component={PhotoShowContainer} />

    </Switch>
  </div>
);

export default App;

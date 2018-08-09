import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import navbar from './navbar';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(navbar);

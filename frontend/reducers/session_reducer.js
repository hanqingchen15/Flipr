import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUser = Object.freeze(
  { id: null }
);

const sessionReducer = (state = nullUser, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      return nullUser;
    default:
      return nullUser;
  }
};

export default sessionReducer;

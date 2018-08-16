import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PHOTO } from '../actions/photo_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_PHOTO:
      return merge({}, state, {[action.payload.owner.id]: action.payload.owner});
    default:
      return state;
  }
}

export default usersReducer;

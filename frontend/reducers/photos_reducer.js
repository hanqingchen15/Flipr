import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO, DELETE_PHOTO } from '../actions/photo_actions';
import { merge } from 'lodash';

const photosReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return merge({}, action.photos);
    case RECEIVE_PHOTO:
      return merge({}, state, action.photo);
    case DELETE_PHOTO:
      let newState = merge({}, state);
      delete newState[action.photo.id];
      return newState;
    default:
      return state;

  }
}

export default photosReducer;

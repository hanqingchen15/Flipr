import React from 'react';
import { connect } from 'react-redux';
import { requestPhoto, updatePhoto, removePhoto } from '../../actions/photo_actions';
import PhotoShow from './photo_show';

const msp = (state, ownProps) => {
  let photoId = ownProps.match.params.photoId;
  let photo = state.entities.photos[photoId] || {};

  return  {
    photo,
    owner: state.entities.users[photo.owner_id],
    currentUser: state.session,
    photoId
  }
};

const mdp = (dispatch, ownProps) => ({
  requestPhoto: (photoId) => dispatch(requestPhoto(photoId)),
  updatePhoto: (photoId) => dispatch(updatePhoto(photoId)),
  destroyPhoto: (photoId) => dispatch(removePhoto(photoId))
});

export default connect(msp, mdp)(PhotoShow);

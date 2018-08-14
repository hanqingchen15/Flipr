import React from 'react';
import { connect } from 'react-redux';
import { requestPhoto, updatePhoto, removePhoto } from '../../actions/photo_actions';
import PhotoShow from './photo_show';

const msp = (state, ownProps) => ({
  photo: state.entities.photos,
  currentUser: state.session.currentUser,
  photoId : ownProps.match.params.photoId
});

const mdp = (dispatch, ownProps) => ({
  requestPhoto: (photoId) => dispatch(requestPhoto(photoId)),
  updatePhoto: (photoId) => dispatch(updatePhoto(photoId)),
  destroyPhoto: (photoId) => dispatch(destroyPhoto(photoId))
});

export default connect(msp, mdp)(PhotoShow);

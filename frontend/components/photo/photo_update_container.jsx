import React from 'react';
import { connect } from 'react-redux';
import { updatePhoto } from '../../actions/photo_actions';
import PhotoForm from './photo_form';

const msp = (state, ownProps) => {
  let photoId = ownProps.match.params.photoId;
  let photo = state.entities.photos[photoId] || {};
  return {
    photo,
    photoId,
    formType: 'update',
    errors: state.errors.photos
  };
}

const mdp = (dispatch, ownProps) => {
  return {
    submitPhoto: (photo) => dispatch(updatePhoto(photo))
  }
}

export default connect(msp, mdp)(PhotoForm);

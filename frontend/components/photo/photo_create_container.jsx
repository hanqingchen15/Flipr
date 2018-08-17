import React from 'react';
import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions';
import PhotoForm from './photo_form';

const msp = (state, ownProps) => {
  let photoId = ownProps.match.params.photoId || {};
  let photo = state.entities.photos[photoId] || {};
  return {
    photo,
    formType: 'create',
    errors: state.errors.photos
  };
}

const mdp = (dispatch, ownProps) => {
  return {
    submitPhoto: (photo) => dispatch(createPhoto(photo))
  }
}

export default connect(msp, mdp)(PhotoForm);

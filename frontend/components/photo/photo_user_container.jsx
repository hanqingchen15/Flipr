import React from 'react';
import { connect } from 'react-redux';
import { selectAllPhotos } from '../../reducers/selectors';
import { requestUserPhotos } from '../../actions/photo_actions';
import PhotoUser from './photo_user';

const msp = state => {
  return ({
    photos: selectAllPhotos(state),
    currentUser: state.session
  });
}

const mdp = dispatch => ({
  requestUserPhotos: (ownerId) => dispatch(requestUserPhotos(ownerId))
});

export default connect(msp, mdp)(PhotoUser);

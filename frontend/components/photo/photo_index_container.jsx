import React from 'react';
import { connect } from 'react-redux';
import { selectAllPhotos } from '../../reducers/selectors';
import { requestAllPhotos } from '../../actions/photo_actions';
import PhotoIndex from './photo_index';

const mapStateToProps = state => ({
    photos: selectAllPhotos(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPhotos: () => dispatch(requestAllPhotos())
});

export default connect (mapStateToProps, mapDispatchToProps)(PhotoIndex);

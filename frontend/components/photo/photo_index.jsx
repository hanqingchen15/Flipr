import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPhotos();
  }

  render() {
    const {photos} = this.props;
    return (
      <div>
        <ul>
          {photos.map( (photo, idx) => <PhotoIndexItem key={idx} photo={photo} />)}
        </ul>
      </div>
    );
  }
}

export default PhotoIndex;

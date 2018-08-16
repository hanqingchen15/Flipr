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
      <div className="explorepage">
        <div className="manyPhotos">
        <h1 className="banner">Explore</h1>

          <ul className="photoColumn">
            {photos.map( (photo, idx) => <PhotoIndexItem key={idx} photo={photo} />)}
          </ul>
        </div>
      </div>
    );
  }
}

export default PhotoIndex;

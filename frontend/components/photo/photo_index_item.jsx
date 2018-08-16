import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = ({photo}) => (
  <div className="photo-index-item">
    <li  className="photoItem">
      <Link to={`/photos/${photo.id}`}><img src={`${photo.photoUrl}`} /></Link>
      <div className="phototext">
        <p className="title">{photo.name}</p>
        <p className="description">{photo.description}</p>
      </div>
    </li>
  </div>
);

export default PhotoIndexItem;

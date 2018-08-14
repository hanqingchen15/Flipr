import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = ({photo}) => (
  <div className="photo-index-item">
    <li>
      <Link to={`/photos/${photo.id}`}><img src={`${photo.photoUrl}`} /></Link>
      <p>{photo.name}</p>
      <p>{photo.description}</p>
    </li>
  </div>
);

export default PhotoIndexItem;

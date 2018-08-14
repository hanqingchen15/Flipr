import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const DELETE_PHOTO = "DELETE_PHOTO";
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";

export const receiveAllPhotos = (photos) => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const deletePhoto = photo => ({
  type: DELETE_PHOTO,
  photo
});

export const receivePhotoErrors = errors => ({
  type: RECEIVE_PHOTO_ERRORS,
  errors
});

export const requestAllPhotos = () => (dispatch) => (
  PhotoAPIUtil.fetchPhotos().then(photos => dispatch(receiveAllPhotos(photos)))
);

export const requestPhoto = (id) => (dispatch) => (
  PhotoAPIUtil.fetchPhoto(id).then(
    photo => dispatch(receivePhoto(photo))
  )
);

export const requestUserPhotos = (ownerId) => (dispatch) => (
  PhotoAPIUtil.fetchUserPhotos(ownerId).then(
    photos => dispatch(receiveAllPhotos(photos))
  )
);

export const createPhoto = (photo) => (dispatch) => (
  PhotoAPIUtil.createPhoto(photo).then(
    photo => dispatch(receivePhoto(photo))
  )
);

export const updatePhoto = (photo) => (dispatch) => (
  PhotoAPIUtil.updatePhoto(photo).then(
    photo => dispatch(receivePhoto(photo))
  )
);

export const removePhoto = (photoId) => (dispatch) => (
  PhotoAPIUtil.deletePhoto(photoId).then(
    photo => dispatch(deletePhoto(photo))
  )
);

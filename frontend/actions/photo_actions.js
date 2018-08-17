import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const DELETE_PHOTO = "DELETE_PHOTO";
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";

export const receiveAllPhotos = (photos) => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

export const receivePhoto = payload => ({
  type: RECEIVE_PHOTO,
  payload
});

export const deletePhoto = payload => ({
  type: DELETE_PHOTO,
  payload
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
    payload => dispatch(receivePhoto(payload))
  )
);

export const requestUserPhotos = (ownerId) => (dispatch) => (
  PhotoAPIUtil.fetchUserPhotos(ownerId).then(
    photos => dispatch(receiveAllPhotos(photos))
  )
);

export const createPhoto = (photo) => (dispatch) => (
  PhotoAPIUtil.createPhoto(photo).then(
    payload => dispatch(receivePhoto(payload))
  )
);

export const updatePhoto = (photo, id) => (dispatch) => (
  PhotoAPIUtil.updatePhoto(photo, id).then(
    payload => dispatch(receivePhoto(payload))
  )
);

export const removePhoto = (photoId) => (dispatch) => (
  PhotoAPIUtil.deletePhoto(photoId).then(
    payload => dispatch(deletePhoto(payload))
  )
);

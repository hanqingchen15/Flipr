import values from 'lodash/values';

export const selectAllPhotos = state => {
  return values(state.entities.photos);
};

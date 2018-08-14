export const fetchPhotos = () => (
  $.ajax({
    method: "GET",
    url: "api/photos"
  })
);

export const fetchPhoto = (id) => (
  $.ajax({
    method: "GET",
    url: `api/photos/${id}`
  })
);

export const fetchUserPhotos = (ownerId) => (
  $.ajax({
    method: "GET",
    url: `api/photos`,
    data: { owner_id: ownerId }
  })
);

export const createPhoto = (photo) => (
  $.ajax({
    method: "POST",
    url: "api/photos",
    data: { photo }
  })
);

export const updatePhoto = (photo) => (
  $.ajax({
    method: "PATCH",
    url: `api/photos/${photo.id}`,
    data: { photo }
  })
);

export const deletePhoto = (photoId) => (
  $.ajax({
    method: "DELETE",
    url: `api/photos/${photoId}`
  })
);

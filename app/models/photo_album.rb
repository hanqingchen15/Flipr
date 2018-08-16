class PhotoAlbum < ApplicationRecord
  validates :photo_id, :album_id, presence: true

  belongs_to :photos,
  primary_key: :id,
  foreign_key: :photo_id,
  class_name: :Photo

  belongs_to :albums,
  primary_key: :id,
  foreign_key: :photo_id,
  class_name: :Albums
end

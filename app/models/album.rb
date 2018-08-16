class Album < ApplicationRecord
  validates :creator_id, :name, presence: true

  has_many :photo_albums,
  primary_key: :id,
  foreign_key: :album_id,
  class_name: :PhotoAlbum

  has_many :photos,
  through: :photo_albums,
  source: :photos
end

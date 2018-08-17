class Photo < ApplicationRecord
  validates :name, presence: true

  validate :ensure_attachment

  def ensure_attachment
    unless self.photo.attached?
      return errors[:photo] << "Must have a photo attached"
    end
  end

  has_one_attached :photo

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :User

  has_many :photo_albums,
  primary_key: :id,
  foreign_key: :photo_id,
  class_name: :PhotoAlbum

  has_many :albums,
  through: :photo_albums,
  source: :albums
end

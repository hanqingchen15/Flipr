class Photo < ApplicationRecord
  validates :image_url, presence: true;
end

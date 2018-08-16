class CreatePhotoAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :photo_albums do |t|
      t.integer :album_id
      t.integer :photo_id
    end
  end
end

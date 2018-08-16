class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.integer :creator_id, null: false
      t.string :album_name, null: false
      t.string :album_description
      t.timestamps
    end
    add_index :albums, :creator_id
  end
end

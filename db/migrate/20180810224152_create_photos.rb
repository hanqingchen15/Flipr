class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :image_url, null: false
      t.integer :owner_id, null: false
      t.string :name, null: false
      t.string :description
      t.timestamps
    end
    add_index :photos, :owner_id
  end
end

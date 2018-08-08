class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :profile_pic_url
      t.string :fname, null: false
      t.string :lname, null: false
      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :session_token
  end
end

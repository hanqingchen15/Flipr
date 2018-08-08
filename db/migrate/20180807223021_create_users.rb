class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :profile_pic_url, null: false
      t.string :fname, null: false
      t.string :lname, null: false
      t.timestamps
    end
  end
end

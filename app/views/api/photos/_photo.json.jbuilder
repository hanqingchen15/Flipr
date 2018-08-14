json.extract! photo, :id, :name, :description, :owner_id, :image_url
json.photoUrl url_for(photo.photo)
json.owner photo.owner.fname
json.owner photo.owner.lname

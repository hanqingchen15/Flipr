json.extract! photo, :id, :name, :description, :owner_id, :image_url
json.owner photo.owner.fname
json.owner photo.owner.lname

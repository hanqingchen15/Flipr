json.set! :photo do
  json.partial! 'api/photos/photo', photo: @photo
end

json.set! :owner do
  json.partial! 'api/users/user', user: @photo.owner
end
  

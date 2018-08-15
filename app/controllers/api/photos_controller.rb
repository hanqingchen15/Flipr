class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    @photo.owner_id = current_user.id
    if @photo.save
      render 'api/photos/show'
    else
      render json: ['cannot upload photo, some fields missing'], status: 422
    end
  end

  def update
    @photo = current_user.photos.find_by(id: params[:id])
    if @photo.nil? == false && @photo.update_attributes(photo_params)
      render 'api/photos/show'
    else
      render json: ['cannot find/update the photo'], status: 422
    end
  end

  def destroy
    @photo = current_user.photos.find_by(id: params[:id])
    if @photo
      @photo.destroy
      render 'api/photos/show'
    else
      render json: ['cannot delete this photo'], status: 422
    end
  end

  def index
    puts(params)
    if params[:owner_id]
      @photos = Photo.where(owner_id: params[:owner_id]).includes(:owner)
    else
      @photos = Photo.all.includes(:owner)
    end
    render :index
  end


  def show
    @photo = Photo.find(params[:id])
    if @photo
      render 'api/photos/show'
    else
      render json: ['No photos found'], status: 404
    end
  end



  def photo_params
    params.require(:photo).permit(:name, :description, :image_url, :owner_id, :photo)
  end
end

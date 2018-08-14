Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'
  namespace :api, default: { format: :json } do
    resources :users
    resource :session, only: [:create, :destroy]
    resources :photos
  end
end

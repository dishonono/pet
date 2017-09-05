Rails.application.routes.draw do

  #get 'pet_index', to: 'pet_index#index'

  root 'pet_index#index'

  namespace :api , defaults: {format: 'json'} do
    namespace :v1 do
      resources :restaurants do
        resources :reviews
      end
      resources :genres
    end
  end

  namespace :admin , defaults: {format: 'html'} do
    resources :restaurants
    resources :genres
    resources :reviews
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

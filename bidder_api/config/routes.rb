Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :auctions, only: [:index,:create, :show, :update] do
        resources :bids, only: [:create,:destroy]
      end
      resource :session, only: [:create, :destroy]
      resources :users, only: [:create, :show] do
      get :current, on: :collection 
    end
    end
  end 
end

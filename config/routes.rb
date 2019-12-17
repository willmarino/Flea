Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show] do
      resources :carts, only: [:show, :create, :delete]
      resources :orders, only: [:show, :index, :create]
    end
    resource :session, only: [:create, :destroy]

    resources :shops, only: [:create, :show, :index, :update, :destroy] do
      resources :products, only: [:create]
    end

    resources :products, only: [:index, :show, :destroy, :update]
      
    resources :reviews, only: [:create, :index]


  end


end
``
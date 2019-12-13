Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]

    resources :shops, only: [:create, :show, :update, :destroy] do
      resources :products, only: [:create, :update, :show, :destroy]
    end

    resources :products, only: [:index]

  end


end

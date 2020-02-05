Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show] do
      collection do
        post 'add_viewed' #add a viewed product's id to user's viewed attribute
      end
      member do
        get 'recently_viewed' #return recently viewed product objects
        post 'clear_views'
      end
    end
    resources :carts, only: [:show, :create, :delete]
    resources :cart_items, only: [:index, :create, :delete]
    resources :orders, only: [:show, :index, :create]
    resource :session, only: [:create, :destroy]

    resources :shops, only: [:create, :show, :index, :update, :destroy] do
      member do
        get 'shop_reviews'
      end
      resources :products, only: [:create]
    end

    resources :products, only: [:index, :show, :destroy, :update] do
      collection do
        # get 'grab_by_ids'
        get 'grab_by_category'
        get 'categories'
      end
      member do
        get 'product_reviews'
      end
    end
      
    resources :reviews, only: [:create, :index] do
      collection do
        get 'happy_reviews'
      end
    end


  end


end
``
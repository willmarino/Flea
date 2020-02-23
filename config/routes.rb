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
        get 'cart'
        post 'clear_views'
      end
    end
    resources :carts, only: [:show, :create, :delete] do
      member do
        get 'fetch'
        post 'add_item'
      end
      collection do
        post 'clear'
        get 'cart_show'
      end
    end
    resources :cart_items, only: [:index, :create, :destroy]
    resources :orders, only: [:show, :index, :create]
    resource :session, only: [:create, :destroy]

    resources :shops, only: [:create, :show, :index, :update, :destroy] do
      member do
        get 'shop_reviews'
        get 'products'
        get 'shop_show'
      end
      collection do
        get 'owned'
      end
      resources :products, only: [:create]
    end

    resources :products, only: [:index, :show, :destroy, :update] do
      collection do
        get 'grab_index'
        get 'grab_by_category'
        get 'categories'
      end
      member do
        get 'product_reviews'
        get 'shop_by_product'
        get 'product_show'
        get 'associated'
      end
    end
      
    resources :reviews, only: [:create, :index] do
      collection do
        get 'happy_reviews'
      end
    end

    resources :views, only: [:index] do
      collection do
        get 'user_views'
        get 'product_views'
        get 'recent'
        post 'add'
      end
    end

    resources :shop_views, only: [:index] do
      collection do
        get 'views'
        post 'add'
      end
    end

    resources :searches, only: [:create] do
      collection do
        get 'popular'
        get 'suggested'
        get 'search_main'
        get 'suggested_searches'
      end
    end

    resources :categories, only: [:index]


  end


end
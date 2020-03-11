class Api::ShopFavoritesController < ApplicationController

  def index
  end

  def by_shop
    shop = Shop.find(params[:id])
    @shop_favorites = shop.favorites

    render :by_shop
  end

  def create
    @shop_favorite = ShopFavorite.create!({ user_id: current_user.id, shop_id: params[:id] })
    render :show
  end

  def destroy
    @shop_favorite_id = params[:id]
    ShopFavorite.find(@shop_favorite_id).destroy
    render :destroy
  end

end

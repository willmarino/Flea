class Api::ProductFavoritesController < ApplicationController

  def by_product
    product = Product.find(params[:id])
    @product_favorites = product.favorites
    render :by_product
  end

  def create
    @product_favorite = ProductFavorite.create!({ user_id: current_user.id, product_id: params[:id] })
    render :show
  end

  def destroy
    @product_favorite_id = params[:id]
    ProductFavorite.find(params[:id]).destroy
    render :destroy
  end

end

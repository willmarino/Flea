class Api::ShopViewsController < ApplicationController

  def shop_views
    shop = Shop.find(params[:shop_id])
    @views = shop.views
    render :views_arr
  end

  def add
    shop = Shop.find(params[:shop_id])
    view = ShopView.create({ user_id: current_user.id, shop_id: shop.id })
    @views = shop.shop_views
    render :views_arr
  end

end

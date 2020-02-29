class Api::ShopViewsController < ApplicationController

  def shop_views
    shop = Shop.find(params[:shop_id])
    @views = shop.views
    render :views_arr
  end

  def add
    shop = Shop.find(params[:shop_id])
    if !logged_in?
      cur_user = User.find_by(username: "DataCompiler")
    else
      cur_user = current_user
    end
    view = ShopView.create({ user_id: cur_user.id, shop_id: shop.id })
    @views = shop.shop_views
    render :views_arr
  end

end

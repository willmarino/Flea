class Api::ViewsController < ApplicationController

  def user_views
    @views = current_user.views
    render :views_arr
  end

  def product_views
    product = Product.find(params[:prod_id])
    @views = product.views
    render :views_arr
  end

  def add
    product = Product.find(params[:prod_id])
    View.create({ user_id: current_user.id, product_id: product.id })
    @views = product.views
    render :views_arr
  end

end

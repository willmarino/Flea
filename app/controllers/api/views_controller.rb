class Api::ViewsController < ApplicationController

  def user_views
    @views = current_user.views
    render :views_arr
  end

  def recent
    all_views = current_user.views.order(created_at: :desc)
    if all_views.length < 6
      View.all.order(created_at: :desc).each do |view|
        all_views << view
        break if all_views.length < 6
      end
    end
    views_obj = {}

    all_views.each do |v|
      if !views_obj[v.product_id]
        views_obj[v.product_id] = v
      end
      break if views_obj.keys.length == 6
    end

    @views = views_obj.values
    prod_ids = views_obj.keys
    @products = prod_ids.map{ |id| Product.find(id) }
    render :recent
  end

  def product_views
    product = Product.find(params[:prod_id])
    @views = product.views
    render :views_arr
  end

  def add
    product = Product.find(params[:prod_id])
    if !logged_in?
      cur_user = User.find_by(username: "DataCompiler")
    else
      cur_user = current_user
    end
    View.create({ user_id: cur_user.id, product_id: product.id })
    @views = product.views
    render :views_arr
  end

end

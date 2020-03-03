class Api::OrdersController < ApplicationController

  def show
    @order = Order.find(params[:id])
    if @order
      render :show
    else
      render json: ["Order not found"]
    end
  end

  def index
    @orders = Order.all
    render :index
  end

  def create
    user_id = order_params[:user_id]
    product_ids = order_params[:product_ids]
    @order = Order.new({ user_id: user_id })
    if @order.save
      product_ids.each do |prod_id|
        product = Product.find(prod_id)
        shop = product.shop
        ProductOrder.create!({ order_id: @order.id, product_id: prod_id, shop_id: shop.id })
      end
      current_user.cart.cart_items.destroy_all
      render :show
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  def order_params
    params.require(:order).permit(:user_id, product_ids: [])
  end

end

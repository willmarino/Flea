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
    @order = Order.new(order_params)
    if @order.save
      render :show
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  def order_params
    params.require[:order].permit[:user_id, :cart_id, :delivered]
  end

end

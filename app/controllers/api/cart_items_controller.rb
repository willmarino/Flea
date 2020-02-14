class Api::CartItemsController < ApplicationController

  def index
    # @cart_items = CartItem.all
    cart = current_user
    @cart_items = cart.items
    render :index
  end

  def create
    @cart_item = CartItem.new(cart_item_params)
    if @cart_item.save
      render :show
    else
      render json: @cart_item.errors.full_messages, status: 422
    end
  end

  def destroy
    @cart_item = CartItem.find(params[:id])
    @cart_item.destroy
    render :show
  end


  def cart_item_params
    params.require(:cart_item).permit(:item_id, :cart_id)
  end

end

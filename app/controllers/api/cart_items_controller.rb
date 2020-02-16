class Api::CartItemsController < ApplicationController

  def index
    # @cart_items = CartItem.all
    cart = current_user
    @cart_items = cart.items
    render :index
  end

  def create
    cart_item = CartItem.new(cart_item_params)
    if cart_item.save
      @cart_item = { 'item_id' => cart_item.product.id, 'chosen_options' => cart_item.chosen_options, 'id' => cart_item.id }
      @cart_product = cart_item.product
      render :show
    else
      render json: @cart_item.errors.full_messages, status: 422
    end
  end

  def destroy
    @cart_item = CartItem.find(params[:id])
    @cart_item.destroy
    render :for_delete
  end


  def cart_item_params
    params.require(:cart_item).permit(:item_id, :cart_id)
  end

end

class Api::CartItemsController < ApplicationController

  def index
    # @cart_items = CartItem.all
    cart = current_user
    @cart_items = cart.items
    render :index
  end

  def create
    cip = cart_item_params
    if !cip[:chosen_options]
      ops = []
      Product.find(cip[:item_id]).options.each do
        ops << "none"
      end
    else
      ops = cip[:chosen_options]
    end
    @cart_item = CartItem.new({item_id: cip[:item_id], cart_id: current_user.cart.id, chosen_options: ops})
    if @cart_item.save
      @cart_product = @cart_item.product
      render :show
    else
      render json: @cart_item.errors.full_messages, status: 422
    end
  end

  def destroy
    cart_item = CartItem.find(params[:id])
    @cart_item_id = cart_item.id
    cart_item.destroy
    render :for_delete
  end


  def cart_item_params
    params.require(:cart_item).permit(:item_id, :cart_id, chosen_options: [])
  end

end

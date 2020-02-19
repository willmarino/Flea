class Api::CartsController < ApplicationController

  def show
    @cart = Cart.find(params[:id])
    render :show
  end

  def fetch
    @cart = current_user.cart
    render :show
  end

  def cart_show
    @cart = current_user.cart
    # @cart_items = @cart.items

    if @cart.cart_items.length == 0
      @cart_items = []
      @cart_products = []
      @shops = []
      @shop_products = []
    else

      @cart_items = []
      @cart_products = []
      @cart.cart_items.each do |ci|
        @cart_items << { 'item_id' => ci.product.id, 'chosen_options' => ci.chosen_options, 'id' => ci.id }
        @cart_products << ci.product
      end

      @shops = []
      @cart_products.each do |el|
        @shops << el.shop
      end
      # based on shop of most recently added cart item (thats the way Etsy does it)
      @shop_products = @shops[-1].products
      if @shop_products.length > 15
        @shop_products = @shop_products[0...15]
      end
    end


  end

  def clear
    cart = Cart.find_by( user_id: current_user.id)
    cart.cart_items.destroy_all
  end

  def add_item
    @cart = Cart.find(params[:id])
    old_products = @cart.products
    item = item_params
    new_products = old_products.push(item)
    @cart.update_attributes(products: new_products)
    render :show
  end

  def create
    @cart = Cart.new(cart_params)
    if @cart.save
      render :show
    else
      render json: @cart.errors.full_messages, status: 422
    end
  end

  def destroy
    @cart = Cart.find(params[:id])
    @cart.destroy
    render :show
  end

  def cart_params
    params.require(:cart).permit(:user_id, :products)
  end

  def item_params
    params.require(:item).permit(:id, :name, :shop_id, :description, :high_level_category, :mid_level_category, :low_level_category,
     :price, :stock_amt, :photoURL)
  end

end

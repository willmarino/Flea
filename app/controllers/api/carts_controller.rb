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
    debugger;
    @cart = current_user.cart
    @cart_items = @cart.items

    @shops = []
    @cart_items.each do |i|
      @shops << i.shop
    end
    # based on shop of most recently added cart item (thats the way Etsy does it)
    @shop_products = @shops[-1].products
    if @shop_products.length > 15
      @shop_products = @shop_products[0...15]
    end

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

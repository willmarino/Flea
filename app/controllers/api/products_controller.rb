class Api::ProductsController < ApplicationController

  def create
    @product = Product.new(product_params)
    if @product.save
      render :show
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def index
    # debugger
    @products = Product.all
    # debugger
    render :index
  end

  def update
    @product = Product.find(params[:id])
    if @product.update_attributes
      render :show
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def show
    # debugger
    @product = Product.find(params[:id])
    if @product
      render :show
    else
      render json: ["Product not found"], status: 404
    end
  end

  def destroy
    if Product.find(params[:id])
      Product.find(params[:id]).destroy
    else
      render json: ["Product not found"], status: 404
    end
  end

  def product_params
    params.require(:product).permit(:name, :shop_id, :description, 
      :high_level_category, :mid_level_category, :low_level_category, 
      :price, :stock_amt)
  end

end
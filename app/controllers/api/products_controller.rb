class Api::ProductsController < ApplicationController

  def create
    @product = Product.new(product_params)
    if @product.save
      @rating = @product.rating
      render :show
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def index
    @products = Product.all
    render :index
  end

  def update
    @product = Product.find(params[:id])
    if @product.update_attributes
      @rating = @product.rating
      render :show
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def show
    @product = Product.find(params[:id])
    if @product
      @rating = @product.rating
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

  def grab_by_ids #all products which were recently viewed
    #params[ids_arr]
    @products = Product.by_ids(params[:ids_arr])
    render :recent_row
  end

  def grab_by_category #grab by category
    @category = params[:category][:category]
    @products = Product.by_category(params[:category][:category])
    render :category_row
  end

  def product_reviews
    product = Product.find(params[:id])
    @reviews = []
    Review.all.each do |r|
      if r.item_id === product.id
        @reviews << r
      end
    end
    render :product_reviews
  end

  def categories
    @products = Product.product_categories
    render :categories
  end

  def product_params
    params.require(:product).permit(:name, :shop_id, :description, 
      :high_level_category, :mid_level_category, :low_level_category, 
      :price, :stock_amt)
  end

end

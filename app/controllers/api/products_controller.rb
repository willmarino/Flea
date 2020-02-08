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

  def grab_index
    categories = [
      "Gifts",
      "Jewelry & Accessories",
      "Clothing & Shoes",
      "Home & Living",
      "Wedding & Party",
      "Toys & Entertainment",
      "Art & Collectibles",
      "Craft & Supplies",
      "Vintage"
    ]
    @res = []
    cats = []
    while cats.length < 3
      c = categories[rand(9)]
      if(!cats.include?(c))
        cats.push(c)
      end
    end
    cats.each do |cat|
      @res.push(Product.by_category(cat))
    end
    render :index
  end

  def grab_by_category #grab by category
    @category = params[:category][:category]
    @products = Product.by_category(params[:category][:category])
    render :category_row
  end

  def product_reviews
    @reviews = Product.find(params[:id]).reviews
    render :product_reviews
  end

  def categories
    @products = Product.product_categories
    render :categories
  end

  def shop_by_product
    product = Product.find(params[:id])
    @shop = product.shop
    render 'api/shops/show'
  end

  def product_show
    @product = Product.find(params[:id])
    @shop = @product.shop
    @product_reviews = @product.reviews
    @shop_reviews = @shop.reviews
    @shop_review_authors = []
    @shop_review_products = []
    @shop_reviews.each do |sr|
      @shop_review_authors.push(sr.user)
      @shop_review_products.push(Product.find(sr.item_id))
    end
    @product_review_authors = []
    @product_reviews.each do |pr|
      @product_review_authors.push(pr.user)
    end
    render :product_show
  end

  def product_params
    params.require(:product).permit(:name, :shop_id, :description, 
      :high_level_category, :mid_level_category, :low_level_category, 
      :price, :stock_amt)
  end

end

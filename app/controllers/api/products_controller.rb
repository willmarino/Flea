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
    @categories = []
    cats = []
    while cats.length < 3
      c = categories[rand(9)]
      if(!cats.include?(c))
        cats.push(c)
        @categories.push(Category.find_by(name: c))
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
    @categories = @products.map{|p| p.category}
    render :categories
  end

  def shop_by_product
    product = Product.find(params[:id])
    @shop = product.shop
    render 'api/shops/show'
  end

  def associated
    # grab product from db according to id in params
    product = Product.find(params[:id])

    # we have shopProducts in params, and we dont want to grab the same products for associated as those we grabbed for the shop preview,
    # so we have to have a list of the shopProducts we can compare newly aquired associated products too
    # So, we use the data in params to grab all of the products we need from the db
    shopProducts = []
    shopProducts_params.values.each do |obj|
      shopProducts << Product.find(obj["id"])
    end

    # Next, were going to grab a large amount of products with the associayted products association, and filter it down
    # based on which products we are already displaying on the site
    @products = []
    used = shopProducts
    used << product
    associated = product.associated_products
    associated.each do |p|
      already_seen = false
      used.each do |asp|
        if p.id == asp.id
          already_seen = true
          break
        end
      end
      if !already_seen
        @products << p
        used << p
      end
      break if @products.length == 5;
    end
    
    # finally, we need the associated shop for each of the products we send back, so we need to send an array of those back too
    @shops = []
    @products.each do |p|
      @shops << p.shop
    end
    render :associated
  end
  
  # if !(@products.include?(p) || shopProducts.include?(p))
  #   @products << p
  # end
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

  def shopProducts_params
    params.require(:shopProducts).permit!
  end

end

class Api::ShopsController < ApplicationController

  def create
    @shop = Shop.new(shop_params)
    if @shop
      render :show
    else
      render json: @shop.errors.full_messages, status: 422
    end
  end

  def show
    @shop = Shop.find(params[:id])
    if @shop
      render :show
    else
      render json: ["Shop not found"]
    end
  end

  def shop_reviews
    @shop = Shop.find(params[:id])
    if @shop
      @reviews = @shop.reviews
      render :shop_reviews
    else
      render json: ['Shop not found']
    end
  end

  def owned
    @shops = current_user.shops
    @shop_ids = @shops.map{ |shop| shop.id }
    render :owned_shops
  end

  # grabs shop views, shop product views, orders, and number of listings(products)
  def owned_info
    shop = current_user.shops.first
    
    # @shop_views = shop.shop_views
    @shop_views = []
    @shop_view_ids = []
    shop.shop_views.each do |view|
      @shop_views << view
      @shop_view_ids << view.id
    end

    # @shop_product_views = shop.product_views
    @shop_product_views = []
    @shop_product_view_ids = []
    shop.product_views.each do |pv|
      unless pv.user_id == current_user.id
        @shop_product_views << pv
        @shop_product_view_ids << pv.id
      end
    end

    # @orders = shop.orders
    @orders = []
    @order_ids = []
    shop.orders.each do |order|
      @orders << order
      @order_ids << order.id
    end

    @product_orders = []
    @product_order_ids = []
    shop.product_orders.each do |po|
      @product_orders << po
      @product_order_ids << po.id
    end

    # @shop_products = shop.products
    @shop_products = []
    @shop_product_ids = []
    shop.products.each do |p|
      @shop_products << p
      @shop_product_ids << p.id
    end

    render :owned_info
  end

  def owned_view
    @shop = Shop.find(params[:id])
    @products = []
    @product_ids = []
    @shop.products.each do |p|
      @products << p
      @product_ids << p.id
    end
    @categories = []
    @products.each do |p|
      category = Category.find(p.high_level_category)
      @categories << category if !@categories.include?(category)
    end
    @owner = @shop.creator
    render :owned_view
  end

  def owned_listings
    shop = Shop.find(params[:id])
    @products = []
    @product_ids = []
    shop.products.each do |p|
      @products << p
      @product_ids << p.id
    end
    render :owned_listings
  end

  def shop_show
    @shop = Shop.find(params[:id])
    @users = [@shop.creator]
    @products = []
    @reviews = []
    @products << @shop.products
    @shop_product_ids = @products.flatten.map{ |p| p.id }
    @reviews << @shop.reviews
    @review_ids = []
    @reviews.flatten!
    @reviews.each do |r|
      @review_ids << r.id
      @users.push(r.user)
      @products << r.product
    end
    @products.flatten!
    @users.flatten!
    @categories = @products.map{|p| p.category}


    render :shop_show
  end

  def products
    paramdata = shop_exception_params
    shop = Shop.find(params[:id])
    if params[:prodId]
      prod_id = paramdata[:prodId]
    end
    @products = []
    shop.products.each do |p|
      if prod_id
        @products << p if (p.id.to_s != prod_id)
      else
        @products << p
      end
      break if (@products.length >= paramdata[:num].to_i)
    end
    @product_ids = @products.map{ |p| p.id }
    render :products
  end


  def index
    @shops = Shop.all
    render :index
  end

  def update
    @shop = Shop.find(params[:id])
    if @shop.update_attributes
      render :show
    else
      render json: @shop.errors.full_messages, status: 422
    end
  end

  def destroy
    @shop = Shop.find(params[:id])
    if @shop
      @shop.destroy
    else
      render json: ["Shop could not be found"]
    end
  end

  def add_product
    debugger
    attrs = add_listing_params
    category = Category.find_by(name: attrs[:category])
    debugger
    product = Product.create!({ 
      shop_id: attrs[:shop_id],
      name: attrs[:name],
      price: attrs[:price],
      high_level_category: category.id,
      stock_amt: attrs[:amount]
    })
    debugger
    product.photo.attach(io: attrs[:photo], filename: "#{attrs[:name]}_imagefile")
    debugger
    product.set_photourl

    @product = [product]
    @product_id = product.id

    render :new_listing
  end


  def add_listing_params
    params.require(:product).permit(:photo, :name, :price, :category, :amount, :shop_id)
  end

  def shop_params
    params.require(:shop).permit(:name, :image_url, :location, :creator_id, :description, :announcement)
  end

  def shop_exception_params
    params.permit(:num, :prodId)

  end

end

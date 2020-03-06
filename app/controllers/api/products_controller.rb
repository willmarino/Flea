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
    attrs = update_params
    debugger
    if @product.update_attributes({ name: attrs[:name], price: attrs[:price], stock_amt: attrs[:amount], category: attrs[:high_level_category] })
      if(attrs[:photo])
        debugger
        @product.photo.purge
        @product.photo.attach(io: attrs[:photo], filename: "#{attrs[:name]}_imagefile")
        @product.set_photourl
      end
      @product_id = @product.id
      debugger
      render :show
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def show
    @product = Product.find(params[:id])
    if @product
      @product_id = @product.id
      # @rating = @product.rating
      # json.partial! 'product', product: @product
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
# products and sample products for categories
  def grab_index
    @products = []
    @ids = []
    @categories = []
    3.times do
      cur_category = Category.all[rand(0...Category.all.length)]
      while @categories.include?(cur_category)
        cur_category = Category.all[rand(0...Category.all.length)]
      end
      @categories << cur_category
      @products << cur_category.products[0..5]
      @ids <<  @products[-1].map{ |product| product.id}
    end
    @products.flatten!
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
    # shopProductsIds = shopProducts_params
    # shopProducts_params.values.each do |obj|
    #   shopProducts << Product.find(obj["id"])
    # end
    main_shop_id = params[:shopId]

    # Next, were going to grab a large amount of products with the associayted products association, and filter it down
    # based on which products we are already displaying on the site
    @products = []
    # used = shopProducts
    used = [product]
    # associated = product.associated_products
    # associated.each do |p|
    #   already_seen = false
    #   used.each do |asp|
    #     if p.id == asp.id
    #       already_seen = true
    #       break
    #     end
    #   end
    #   if !already_seen
    #     @products << p
    #     used << p
    #   end
    #   break if @products.length == 5;
    # end
    product.associated_products.each do |ap|
      @products << ap if ap.shop_id != main_shop_id && !@products.include?(ap)
      break if @products.length >= 6
    end
    @shops = @products.map{ |p| p.shop }
    @product_ids = @products.map{ |p| p.id }
    
    # finally, we need the associated shop for each of the products we send back, so we need to send an array of those back too
    # @shops = []
    # @products.each do |p|
    #   @shops << p.shop
    # end
    render :associated
  end
  
  # if !(@products.include?(p) || shopProducts.include?(p))
  #   @products << p
  # end
  def product_show

    product = Product.find(params[:id])
    shop = product.shop
    
    shop_reviews = shop.reviews
    shop_review_authors = shop_reviews.map{ |r| r.user }
    shop_review_products = shop_reviews.map{ |r| r.product }
    # shop_reviews.each do |sr|
    #   shop_review_authors.push(sr.user)
    #   shop_review_products.push(Product.find(sr.item_id))
    # end

    product_reviews = product.reviews
    product_review_authors = product_reviews.map{ |p| p.user }
    # product_reviews.each do |pr|
    #   product_review_authors.push(pr.user)
    # end

    #
    @shop_review_ids = shop_reviews.map{ |r| r.id }
    @product_review_ids = product_reviews.map{ |r| r.id }

    # @products = [product].concat(shop_review_products)
    @products = [product]
    @products << shop_review_products
    @products.flatten!
    # shop_review_products.each do |p|
    #   @products << p
    # end
    @shops = shop
    # @reviews = shop_reviews.concat(product_reviews)
    @reviews = []
    @reviews << shop_reviews
    @reviews << product_reviews
    @reviews.flatten!

    # @users = shop_review_authors.concat(product_review_authors)
    @users = []
    @users << shop_review_authors
    @users << product_review_authors
    @users.flatten!
    #
    render :new_product_show
  end

  def recently_viewed
    limit = params[:limit].to_i
    @products = []
    @ids = []

    # run through all user views and compile a list of unique product ids
    # if I have less than 6, than run through all user views and add products ids until I hit 6 (or the limit I am given)

    user_views = current_user.views.order(created_at: :desc)
    user_views.each do |view|
      if !@ids.include?(view.product_id)
        @ids << view.product_id
        @products << Product.find(view.product_id)
      end
      break if @products.length == limit
    end
    if @products.length < limit
      views = View.all.order(created_at: :desc)
      views.each do |view|
        if !@ids.include?(view.product_id)
          @ids << view.product_id
          @products << Product.find(view.product_id)
        end
        break if @products.length == limit
      end
    end
    render :recently_viewed
  end

  def update_params
    params.require(:product).permit(:name, :price, :stock_amt, :photo, :category)
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

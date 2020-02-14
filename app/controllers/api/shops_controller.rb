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

  def shop_show
    @shop = Shop.find(params[:id])
    @owner = @shop.creator
    @products = @shop.products
    @reviews = @shop.reviews
    @authors = []
    @review_products = []
    @review_product_tags = {}
    @reviews.each do |r|
      @authors.push(r.user)
      # @review_products[r.id] = r.product
      @review_products << r.product
      @review_product_tags[r.id] = r.product.tags
    end
    render :shop_show
  end

  def products
    shop = Shop.find(params[:id])
    if params[:prodId]
      prod_id = params[:prodId]
    end
    @products = []
    shop.products.each do |p|
      if prod_id
        @products << p if (p.id.to_s != prod_id)
      else
        @products << p
      end
      break if (@products.length == params[:num].to_i)
    end
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


  def shop_params
    params.require(:shop).permit(:name, :image_url, :location, :creator_id, :description, :announcement)
  end

  def shop_exception_params
    # params.permit(:product)
    params.require(:prodId).permit!
  end

end

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
    render :owned_shops
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


  def shop_params
    params.require(:shop).permit(:name, :image_url, :location, :creator_id, :description, :announcement)
  end

  def shop_exception_params
    params.permit(:num, :prodId)

  end

end

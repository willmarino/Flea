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

  def products
    shop = Shop.find(params[:id])
    prod_id = params[:prodId]
    @products = []
    shop.products.each do |p|
      @products << p if (p.id.to_s != prod_id)
      break if (@products.length == 5)
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

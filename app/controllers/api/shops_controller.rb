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

end

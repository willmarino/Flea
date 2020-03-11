class Api::ProductFavoritesController < ApplicationController

  def by_product
    product = Product.find(params[:id])
  end

  def create

  end

  def destroy

  end

end

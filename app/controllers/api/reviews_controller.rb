class Api::ReviewsController < ApplicationController
  
  def index
    @reviews = Review.all
    render :index
  end

  def create
    debugger
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def review_params
    params.require[:review].permit[:title, :body, :rating, :item_id, :author_id]
  end

end

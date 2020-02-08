class Api::ReviewsController < ApplicationController
  
  def index
    @reviews = Review.all
    render :index
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def happy_reviews
    all_happy_reviews = Review.filter_by_rating(4)
    random_nums = []
    3.times do
        random_nums << rand(0...all_happy_reviews.length)
    end
    @happy_reviews = []
    random_nums.each do |n|
        @happy_reviews << all_happy_reviews[n]
    end

    @products = []
    @happy_reviews.each do |hr|
        @products << Product.find(hr.item_id)
    end

    @users = []
    @happy_reviews.each do |hr|
      @users << User.find(hr.author_id)
    end
    
    render :happy_reviews
end

  def review_params
    params.require[:review].permit[:title, :body, :rating, :item_id, :author_id]
  end

end

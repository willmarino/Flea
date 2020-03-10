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
    @review_ids = []
    random_nums.each do |n|
      @happy_reviews << all_happy_reviews[n]
      @review_ids << all_happy_reviews[n].id
    end

    @products = []
    @product_ids = []
    @happy_reviews.each do |hr|
      product = Product.find(hr.item_id)
      @products << product
      @product_ids << product.id
    end

    @users = []
    @user_ids = []
    @happy_reviews.each do |hr|
      user = User.find(hr.author_id)
      @users << user
      @user_ids << user.id
    end

    # @most_viewed_shop = Shop.most_viewed
    # @most_ordered_shop = Shop.most_ordered
    # @most_bought_product = Product.most_bought
    # @most_viewed_shop_id = @most_viewed_shop.id
    # @most_ordered_shop_id = @most_ordered_shop.id
    # @most_bought_product_id = @most_bought_product.id
    
    render :happy_reviews
end

  def review_params
    params.require[:review].permit[:title, :body, :rating, :item_id, :author_id]
  end

end

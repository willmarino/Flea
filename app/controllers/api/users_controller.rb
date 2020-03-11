class Api::UsersController < ApplicationController

  def show
    @user = User.find_by_credentials(
      params[:users][:username],
      params[:users][:password]
    )
    if @user
      render :show
    else
      render json: ["user cannot be found"], status: 401
    end
  end

  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      @cart = Cart.create(user_id: @user.id)
      render :user_creation
    else
      # render json: @user.errors.full_message, status: 422
      render json: @user.errors.full_messages, status: 422
    end
  end

  def add_viewed
    current_user.add_viewed(viewed_params[:product_id])
  end

  def recently_viewed
    @user = User.find(params[:id])
    @recently_viewed = @user.recently_viewed
    render :recently_viewed
  end

  def clear_views
    @user = User.find(params[:id])
    @user.clear_views
  end

  def cart
    @user = User.find(params[:id])
    @cart = @user.cart
    render 'api/carts/show'
  end

  def favorites
    user = User.find(params[:id])
    @shop_favorites = []
    @shops = []
    # @shop_ids = []
    user.shop_favorites.each do |sf|
      @shop_favorites << sf
      s = sf.shop
      @shops << s
      # @shop_ids << s.id
    end
    
    @product_favorites = []
    @products = []
    # @product_ids = []
    user.product_favorites.each do |pf|
      @product_favorites << pf
      p = pf.product
      @products << p
      # @product_ids << p.id
    end
    render :favorites
  end

  def viewed_params
    params.require(:product).permit(:product_id)
  end

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end

end

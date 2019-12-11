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
    # debugger
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_message, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end

end

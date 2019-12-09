class Api::UsersController < ApplicationController
  protect_from_forgery except: :create

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

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  def user_params
    params.require(:user).permit(:username, :password, :email, :description, :location)
  end

end

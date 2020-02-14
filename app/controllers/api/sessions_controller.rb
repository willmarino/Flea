class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:user][:username])
    if !@user
      render json: ["Username not found"], status: 422
      return;
    end

    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)

      @cart = @user.cart
      @cart_items = @cart.items

      render :show
    else
      render json: ["Wrong password"], status: 422
    end
  end


  def destroy
    if logged_in?
      logout
      render json: ["you have been logged out"]
    else
      render json: ["there is no user logged in!"], status: 404
    end
  end

end

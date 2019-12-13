class Api::SessionsController < ApplicationController

  def create
    # debugger
    @user = User.find_by(username: params[:user][:username])
    if !@user
      render json: ["Username not found"], status: 422
      return;
    end

    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    # debugger
    if @user
      login(@user)
      render :show
    else
      render json: ["Wrong password"], status: 422
      # debugger
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

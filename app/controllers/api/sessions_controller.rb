class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    # debugger
    if @user
      login(@user)
      render :show
    else
      # debugger
      render json: ["invalid username or password"], status: 422
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

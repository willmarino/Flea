class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:users][:username],
      params[:users][:password]
    )
    if @user
      login(@user)
      render '/api/users/show'
    else
      render json: ["invalid username or password, try again"], status: 401
    end
  end


  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: ["there is no user logged in!"], status: 404
    end
  end

end

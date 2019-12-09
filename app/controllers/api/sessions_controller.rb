class Api::SessionsController < ApplicationController
  protect_from_forgery except: :create
  protect_from_forgery except: :destroy


  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
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
      render json: ["you have been logged out"]
    else
      render json: ["there is no user logged in!"], status: 404
    end
  end

end

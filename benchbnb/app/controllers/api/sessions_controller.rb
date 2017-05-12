class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params)
    if @user
      login(@user)
      render template: "users/show"
    else
      render json: "Invalid credentials", status: 401
    end
  end

  def destroy
    if current_user
      render json: {}
    else
      render json: "No logged in user", status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end

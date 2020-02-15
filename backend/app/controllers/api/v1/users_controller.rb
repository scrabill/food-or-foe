class Api::V1::UsersController < ApplicationController

  def index
    @users = User.all

    render json: @users, status: 200
  end

  def show
    @user = User.find_by(name: params[:name])

    render json: @user, status: 200
  end

  def create
    @user = User.create(user_params)

    render json: @user, status: 200
  end

  def update
    @user = User.find_by(name: params[:name])
    @user.update(user_params)

    render json: @user, status: 200
  end

  private

    def user_params
      params.require(:game).permit(:user, :score)
    end
end

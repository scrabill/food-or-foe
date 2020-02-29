class Api::V1::UsersController < ApplicationController

  def index
    @users = User.all

    render json: @users.to_json(include: [:games]), status: 200
  end

  # TODO: Update to find by name
  def show
    @user = User.find_by_id(params[:id])

    if @user
      render json: @user.to_json(include: [:games]), status: 200
    else
      render json: {error: "User not found"}, status: 404
    end
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
      params.require(:user).permit(:name)
    end
end

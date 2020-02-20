class Api::V1::GamesController < ApplicationController

  def index
    @games = Game.all

    render json: @games, status: 200
  end

  def show
    @game = Game.find_by(id: params[:id])

    render json: @game, status: 200
  end

  def create
    @game = Game.create(game_params)

    render json: @game, status: 200
  end

  def update
    @game = Game.find_by(name: params[:name])
    @Game.update(game_params)

    render json: @game, status: 200
  end

  private

    def game_params
      params.require(:game).permit(:user_id, :score)
    end
end

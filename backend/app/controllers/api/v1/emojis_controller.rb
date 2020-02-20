class Api::V1::EmojisController < ApplicationController
  def index
    @emojis = Emoji.all

    render json: @emojis, status: 200
  end

  def show
    @emoji = Emoji.find_by_id(params[:id])

    render json: @emoji, status: 200
  end

  def food
    @emojis = Emoji.food

    render json: @emojis, status: 200
  end
end

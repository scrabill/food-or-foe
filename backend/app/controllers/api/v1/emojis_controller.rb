class Api::V1::EmojisController < ApplicationController
  def index
    @emojis = Emoji.all

    render json: @emojis, status: 200
  end

  def show
    @emoji = Emoji.find_by_id(params[:id])

    if @emoji
      render json: @emoji, status: 200
    else
      render json: {error: "Emoji not found"}, status: 404
    end
  end

  def food
    @emojis = Emoji.food

    render json: @emojis, status: 200
  end
end

class Api::V1::EmojisController < ApplicationController
  def index
    @emojis = Emoji.all

    render json: @emojis, status: 200
  end
end

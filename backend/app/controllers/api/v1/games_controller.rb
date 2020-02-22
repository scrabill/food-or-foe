class Api::V1::GamesController < ApplicationController

  def index
    @games = Game.all

    render json: @games.to_json(include: [:user]), status: 200
  end

  def show
    @game = Game.find_by(id: params[:id])

    render json: @game, status: 200
  end

  # TODO: Account for if a new game is being created by a user that already exists (append to user games array) Validation failed: Name has already been taken

  def create

    @game = Game.new(game_params)
    @user = User.find_by(name: params[:name])

    if @user
      @game.user = @user
    else
      @user = User.create!(name: params[:name])
      @game.user = @user
      @user.games << @game
    end

    if @game.save
      render json: @game, status: 200
    end
  end

#   def create
#     # binding.pry
#     question = Question.new(question_params)
#     user = User.find_by_id(params[:user_id])
#     question.user = user
#     if question.save
#         render json: question, status: 200
#     end
# end

  def update
    @game = Game.find_by(name: params[:name])
    @Game.update(game_params)

    render json: @game, status: 200
  end

  private

    def game_params
      params.require(:game).permit(:user_id, :score, :name)
    end
end

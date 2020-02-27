class Game < ApplicationRecord
  belongs_to :user

  validates :score, presence:

  def self.leaderboard
    # Create an empty hash
    all_scores = {}

    # Iterate over each game as a key/value pair with it's id as the key and the score as the value
    Game.all.each do |game|
      all_scores[game.id] = game.score
    end

    # Sort the hash by value (low to high) then reverse if (high to low)
    sorted_scores = all_scores.sort_by{|k,v| v}.reverse

    # Get just the ids of those games, in order (high to low)
    just_ids = sorted_scores.to_h.keys

    sorted_games = []

    # Find each game object and add it to an array
    # TODO: Use map!
    just_ids.each do |id|
      sorted_games << Game.find_by_id(id)
    end

    # Return the array of games, sorted by score (high to low)
    sorted_games
  end
end

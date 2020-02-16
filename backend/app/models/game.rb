class Game < ApplicationRecord
  belongs_to :user

  validates :score, presence: true
end

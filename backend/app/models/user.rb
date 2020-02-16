class User < ApplicationRecord
  has_many :game

  validates :name, presence: true
  validates :name, uniqueness: true
end

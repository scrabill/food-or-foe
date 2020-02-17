class Emoji < ApplicationRecord

  validates :character, presence: true
  validates :character, uniqueness: true
  validates :slug, presence: true
end

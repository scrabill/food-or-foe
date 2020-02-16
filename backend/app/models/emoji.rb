class Emoji < ApplicationRecord

  validates :character, presence: true
  validates :slug, presence: true
end

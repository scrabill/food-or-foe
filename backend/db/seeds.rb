# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Creates a user
User.create(name: "Shigetaka Kurita")

# Creates food emojis...yum!
Emoji.create(slug: "burger", character: "🍔", is_food?: true)
Emoji.create(slug: "shrimp", character: "🍤", is_food?: true)
Emoji.create(slug: "grapes", character: "🍇", is_food?: true)
Emoji.create(slug: "watermelon", character: "🍉", is_food?: true)
Emoji.create(slug: "lemon", character: "🍋", is_food?: true)
Emoji.create(slug: "avocado", character: "🥑", is_food?: true)
Emoji.create(slug: "pretzel", character: "🥨", is_food?: true)
Emoji.create(slug: "cheese", character: "🧀", is_food?: true)
Emoji.create(slug: "taco", character: "🌮", is_food?: true)
Emoji.create(slug: "spaghetti", character: "🍝", is_food?: true)
Emoji.create(slug: "coconut", character: "🥥", is_food?: true)
Emoji.create(slug: "carrot", character: "🥕", is_food?: true)
Emoji.create(slug: "croissant", character: "🥐", is_food?: true)
Emoji.create(slug: "pancakes", character: "🥞", is_food?: true)
Emoji.create(slug: "banana", character: "🍌", is_food?: true)

# Creates foe emojis...please do not eat them
Emoji.create(slug: "rocket ship", character: "🚀", is_food?: false)
Emoji.create(slug: "unicorn", character: "🦄", is_food?: false)
Emoji.create(slug: "airplane", character: "✈", is_food?: false)
Emoji.create(slug: "robot", character: "🤖", is_food?: false)
Emoji.create(slug: "light bulb", character: "💡", is_food?: false)
Emoji.create(slug: "floppy disk", character: "💾", is_food?: false)
Emoji.create(slug: "books", character: "📚", is_food?: false)
Emoji.create(slug: "moneybag", character: "💰", is_food?: false)
Emoji.create(slug: "bomb", character: "💣", is_food?: false)
Emoji.create(slug: "bicycle", character: "🚲", is_food?: false)
Emoji.create(slug: "anchor", character: "⚓", is_food?: false)
Emoji.create(slug: "alarm clock", character: "⏰", is_food?: false)
Emoji.create(slug: "magnifying glass", character: "🔍", is_food?: false)
Emoji.create(slug: "abacus", character: "🧮", is_food?: false)
Emoji.create(slug: "gem stone", character: "💎", is_food?: false)

# Creates some games and scores to populate the leaderboard
5.times do
  order = Game.create!(user_id: 1, score: Faker::Number.within(range: 19..45))
end

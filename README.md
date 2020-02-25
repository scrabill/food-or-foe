# Food or Foe?

How many food emoji can you correctly identify in 30 seconds?

Each correct answer is worth 1 point. A wrong answer decreases your score by 1 point.

At the end of a round, add your name and score to the leaderboard!

Happy guessing!

![Screnshot of Food or Foe?](food-or-foe-screenshot.png)

## Installation

```
git clone https://github.com/scrabill/food-or-foe.git
cd food-or-foe/backend
rails db:migrate
rails db:seed
rails s
```

To play, open `frontend/index.html` in a browser. If you encounter any bugs or glitches while playing, please open an issue so that I can look into finding a fix.

## API Endpoints

Food or Foe? has three models, each of which can be accessed at the following endpoints.

- http://localhost:3000/api/v1/users
- http://localhost:3000/api/v1/games
- http://localhost:3000/api/v1/emojis
- http://localhost:3000/api/v1/emojis/food

# Contributing

Is this game missing your favorite emoji?

To contribute, please make a pull request with at least the name of the emoji, it's character and if it is a food or not to the backend/db/seeds.rb file.

Here's how I would add 🥓 (bacon)

```ruby
Emoji.create(slug: "bacon", character: "🥓", is_food?: true)
```

## Misc

- [Food or Foe? Video Demo](https://youtu.be/I1Ntg06JUaM) - 1:20
- [Creating Associated Objects in Single Page Applications](https://shannoncrabill.com/blog/ruby-on-rails-api-single-page-javascript-application/)

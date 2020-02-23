# Food or Foe?

How many food emoji can you correctly identify in 30 seconds?

Each correct answer is worth 1 point. A wrong answer decreases your score by 1 point.

At the end of a round, add your name and score to the leaderboard!

Happy guessing!

<iframe width="560" height="315" src="https://www.youtube.com/embed/I1Ntg06JUaM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Installation

```
git clone https://github.com/scrabill/food-or-foe.git
cd food-or-foe/backend
rails db:migrate
rails db:seed
rails s
```

To play, open `frontend/index.html` in a browser

## API Endpoints

Food or Foe? has three models, each of which can be accessed at the following endpoints.

- http://localhost:3000/api/v1/users
- http://localhost:3000/api/v1/games
- http://localhost:3000/api/v1/emojis
- http://localhost:3000/api/v1/emojis/food

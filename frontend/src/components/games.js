class Games {
  constructor() {
    this.games = []
    this.adapter = new GamesAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadGames()
  }

  initBindingsAndEventListeners() {
    this.leaderboard = document.querySelector("#leaderboard")
  }

  fetchAndLoadGames() {
    console.log("Bzz. Loading Games...")
    this.adapter.getGames()
    .then(games => {
      games.forEach(game => this.games.push(game))

      // Games.forEach(Game => this.Games.push(new Game(Game)))
      // return console.log(Games)
    })
    .then(() => {
      this.render()
      this.renderScores()
    })
  }

  render() {
    console.log("Rendering...")
    console.log(this.games)
  }

  // TODO: Add name of player to score
  renderScores() {
    this.leaderboard.innerHTML = this.games.map(game => `<li>${game.score}</li>`).join('')
  }

}

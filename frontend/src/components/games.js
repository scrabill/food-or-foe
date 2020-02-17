class Games {
  constructor() {
    this.games = []
    this.adapter = new GamesAdapter()
    this.fetchAndLoadGames()
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
    })
  }

  render() {
    console.log("Rendering...")
    console.log(this.games)
  }

}

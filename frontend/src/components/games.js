class Games {
  constructor() {
    this.games = []
    this.adapter = new GamesAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadGames()
  }

  // Inherit properys and bindings, etc to emojis and games? Extends?
  initBindingsAndEventListeners() {
    this.leaderboard = document.querySelector("#leaderboard")

    this.counterContainer = document.querySelector("#counter")

    this.foodButton = document.querySelector("#food")
    this.foeButton = document.querySelector("#foe")

    this.startGame = document.querySelector("#start")
    this.startGame.addEventListener('click', (e) => {
      console.log("THE GAME HAS BEGUN")
      // Enable game buttons
      this.foodButton.removeAttribute("disabled")
      this.foeButton.removeAttribute("disabled")

      // Start the timer
      this.startTimer()

    });
  }

  startTimer() {
    console.log("⏰")

    let countercounterContainer = this.counterContainer;
    let counter = this.counterContainer.textContent;

    let printTime = setInterval(function() {
        counter--;
        console.log(counter)
        countercounterContainer.innerHTML = counter
        if (counter <= 0) clearInterval(printTime);
    }, 1000);

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

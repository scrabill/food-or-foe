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

    this.startGame = document.querySelector("#start")
    this.startGame.addEventListener('click', (e) => {
      console.log("THE GAME HAS BEGUN")
      // Enable game buttons
      foodButton.removeAttribute("disabled")
      foeButton.removeAttribute("disabled")

      // Start the timer
      this.startTimer()
      // emojis = new Emojis()

      console.log(emojis.length)

    });
  }

  // TODO: Update counter in UI

  startTimer() {
    console.log("⏰")

    // let counter = 3
    //
    // while (counter > 0) {
    //   window.setInterval(this.printTime, 1000);
    //   counter = - 1
    // }

    // let timer = window.setInterval(this.printTime, 1000);
    console.log(this.counterContainer)

    let countercounterContainer = this.counterContainer;
    let counter = this.counterContainer.textContent;

    let printTime = setInterval(function() {
        counter--;
        console.log(counter)
        countercounterContainer.innerHTML = counter
        // this.counterContainer.innerText = counter
        // console.log(this)
        // this.counterContainer.innerText = counter;
        if (counter <= 0) clearInterval(printTime);
    }, 1000);



  }

  // printTime() {
  //   console.log("hii")
  //   console.log(counter)
  //   // console.log(this.currentCount)
  //
  //   // if (this.currentCount != 0) {
  //   //   this.currentCount --;
  //   //   document.getElementById("counter").innerHTML = this.currentCount;
  //   // } else if (this.currentCount == 0 ) {
  //   //   console.log(this.currentCount)
  //   //   clearInterval(timer)
  //   //   console.log(this.currentCount)
  //   //
  //   //   // displayScore()
  //   //   // clearInterval(timer)
  //   //   console.log("Times up!")
  //   // }
  //
  // }

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

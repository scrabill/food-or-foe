class Games {
  constructor() {
    this.games = []
    this.adapter = new GamesAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadGames()
  }

  // Inherit properys and bindings, etc to emojis and games? Extends?
  initBindingsAndEventListeners() {
    this.score = document.querySelector("#score")
    this.form = document.querySelector("#form")
    this.nameInput = document.querySelector("#name")
    this.submitButton = document.querySelector("#submit")
    this.submitButton.addEventListener('click', (e) => {
      this.createGame(e);
    });

    this.leaderboard = document.querySelector("#leaderboard")

    this.counterContainer = document.querySelector("#counter")

    this.foodButton = document.querySelector("#food")
    this.foeButton = document.querySelector("#foe")
    this.saveGame = document.querySelector("#save")
    this.saveGame.addEventListener('click', (e) => {
      this.createGame(e);
    });

    this.startGame = document.querySelector("#start")
    this.startGame.addEventListener('click', (e) => {
      console.log("THE GAME HAS BEGUN")
      // Enable game buttons
      this.foodButton.removeAttribute("disabled")
      this.foeButton.removeAttribute("disabled")

      // Start the timer
      this.startTimer()

      // When the timer runs out, render the form to save your game
      setTimeout(this.renderForm, (3000));

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

  findUserByID(id) {
    console.log("Finding a user")
    console.log("Rendering...")
    console.log(this.users)
    let user = this.users.find(user => user.id == id )
    console.log(user)
    return user
  }

  // {"score"=>"", "game"=>{"score"=>""}}

//   {
// "id": 37,
// "user_id": 1,
// "score": 123,
// "created_at": "2020-02-22T01:08:48.701Z",
// "updated_at": "2020-02-22T01:08:48.701Z",
// "user": {
// "id": 1,
// "name": "Shannon",
// "created_at": "2020-02-14T04:12:37.070Z",
// "updated_at": "2020-02-14T04:12:37.070Z"
// }
// }
  createGame() {
    console.log("Saving the game...")
    const body = {
      score: this.score.innerText,
      user: {
        name: this.nameInput.value
      },
    }

    this.adapter.createGame(body)
  }

  fetchAndLoadGames() {
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
  }

  renderScores() {
    this.leaderboard.innerHTML = this.games.map(game => `<li>${game.score} - ${game.user.name}</li>`).join('')
  }


  renderForm() {
    this.form.style.display = "block"
  }

}

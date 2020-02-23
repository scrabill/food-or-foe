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
    this.peices = document.querySelector("#peices")

    this.startGame = document.querySelector("#start")
    this.startGame.addEventListener('click', (e) => {
      console.log("THE GAME HAS BEGUN")
      // Show game peice and enable game buttons
      this.peices.style.display = "block"
      document.getElementById("food").disabled = false;
      document.getElementById("foe").disabled = false;

      // Start the timer
      this.startTimer()

      // When the timer runs out, render the form to save your game
      setTimeout(this.renderForm, (3000));

      // Disable game buttons when the timer runs out
      setTimeout(this.endTimer, (3000));
    });
  }

  startTimer() {
    // Reset score and timer if a game has already been played
    this.score.innerText = 0
    this.counterContainer.innerText = 3

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

  endTimer() {
    console.log("THE GAME IS OVER")

    document.getElementById("food").disabled = true;
    document.getElementById("foe").disabled = true;
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
  createGame(e) {
    e.preventDefault()
    console.log("Saving the game...")
    const body = {
      score: this.score.innerText,
      name: this.nameInput.value,
    }

    this.adapter.createGame(body)

    .then(game => {
      let gameObject = `<li>${game.score} - ${this.nameInput.value}</li>`
      this.leaderboard.innerHTML += gameObject
      this.nameInput.value = ""
    })

  }

  fetchAndLoadGames() {
    this.adapter.getGames()
    .then(games => {
      // games.forEach(game => this.games.push(game))
      games.forEach(game => this.games.push(new Game(game)))
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

class Games {
  constructor() {
    this.games = []
    this.adapter = new GamesAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadGames()
  }

  // Inherit properys and bindings, etc to emojis and games? Extends?
  initBindingsAndEventListeners() {
    this.instructions = document.querySelector("#instructions")
    this.howToButton = document.querySelector("#how-to-play")
    this.howToButton.addEventListener('click', (e) => {
      if (this.instructions.style.display == "none") {
        this.instructions.style.display = "block"
      } else {
        this.instructions.style.display = "none"
      }

    });

    this.score = document.querySelector("#score")
    this.form = document.querySelector("#form")
    this.nameInput = document.querySelector("#name")
    this.submitButton = document.querySelector("#submit")
    this.submitButton.addEventListener('click', (e) => {
      this.createGame(e);
    });


    this.leaderboardLink = document.querySelector("#show-leaderboard")
    this.leaderboardContainer = document.querySelector("#leaderboard-container")
    this.leaderboardLink.addEventListener('click', (e) => {
      if (this.leaderboardContainer.style.display == "none") {
        this.leaderboardContainer.style.display = "block"
      } else {
        this.leaderboardContainer.style.display = "none"
      }
    });
    this.leaderboard = document.querySelector("#leaderboard")

    this.counterContainer = document.querySelector("#counter")

    this.foodButton = document.querySelector("#food")
    this.foeButton = document.querySelector("#foe")
    this.peices = document.querySelector("#peices")

    this.startGame = document.querySelector("#start")
    this.startGame.addEventListener('click', (e) => {
      console.log("THE GAME HAS BEGUN")
      // Show game peice and enable game buttons, disable start button while game is in session
      this.peices.style.display = "flex"
      document.getElementById("food").disabled = false;
      document.getElementById("foe").disabled = false;
      document.getElementById("start").disabled = true;
      document.getElementById("submit").disabled = true;

      // Start the timer
      this.startTimer()

      // When the timer runs out, render the form to save your game
      setTimeout(this.renderForm, (30000));

      // Disable game buttons when the timer runs out
      setTimeout(this.endTimer, (30000));
    });
  }

  startTimer() {
    // Reset score and timer if a game has already been played
    this.score.innerText = 0
    this.counterContainer.innerText = 30

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
    document.getElementById("start").disabled = false;
    document.getElementById("submit").disabled = false;
  }

  findUserByID(id) {
    console.log("Finding a user")
    console.log("Rendering...")
    console.log(this.users)
    let user = this.users.find(user => user.id == id )
    console.log(user)
    return user
  }

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

    document.getElementById("submit").disabled = true;

  }

  fetchAndLoadGames() {
    this.adapter.getGames()
    .then(games => {
      // games.forEach(game => this.games.push(game))
      games.forEach(game => this.games.push(new Game(game)))
    })
    .then(() => {
      this.renderScores()
    })
  }

  renderScores() {
    this.leaderboard.innerHTML = this.games.map(game => `<li>${game.score} - ${game.user.name}</li>`).join('')
  }


  renderForm() {
    this.form.style.display = "block"
  }

}

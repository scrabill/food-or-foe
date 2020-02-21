class Games {
  constructor() {
    this.games = []
    this.adapter = new GamesAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadGames()
  }

  // Inherit properys and bindings, etc to emojis and games? Extends?
  initBindingsAndEventListeners() {
    this.form = document.querySelector("#form")
    this.submitButton = document.querySelector("#submit")

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

  createGame() {
    console.log("Saving the game...")
    const body = {
      user_id: 1,
      score: 123
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

    let form = document.createElement("form")
    let inputText = document.createElement("input")
    let inputSubmit = document.createElement("input")

    inputText.setAttribute("type", "text")
    inputText.setAttribute("name", "name")
    inputText.setAttribute("placeholder", "please enter your name")

    inputSubmit.setAttribute("type", "submit")
    inputSubmit.setAttribute("value", "Add to Leaderboard")
    inputSubmit.setAttribute("id", "submit")

    form.appendChild(inputText)
    form.appendChild(inputSubmit)

    return this.form.appendChild(form)

  }

}

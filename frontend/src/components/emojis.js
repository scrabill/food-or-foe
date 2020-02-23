class Emojis {
  constructor() {
    this.emojis = []
    this.foodEmojis = []
    this.adapter = new EmojisAdapter()
    this.fetchAndLoadEmojis()
    this.fetchAndLoadFoodEmojis()
    this.length()
    this.currentEmoji =
    this.currentScore = 0
    this.initBindingsAndEventListeners()
  }

  initBindingsAndEventListeners() {
    this.emojiContainer = document.querySelector("#emoji")
    this.emojiContainer.innerHTML = twemoji.parse("🍔")

    this.score = document.querySelector("#score")

    this.foodButton = document.querySelector("#food")
    this.foodButton = document.querySelector("#food").addEventListener('click', (e) => {
      this.makeAGuess(e)
    })
    this.foeButton = document.querySelector("#foe")
    this.foeButton = document.querySelector("#foe").addEventListener('click', (e) => {
      this.makeAGuess(e)
    })

    this.startGame = document.querySelector("#start")
    this.startGame.addEventListener('click', (e) => {
      this.currentScore = 0
      // Start showing emojis....but this need to change while the clock is running, and refresh once a button is clicked. It shoudl stop when the clock is at zero
      this.displayEmoji()

    });
  }

  fetchAndLoadEmojis() {
    this.adapter.getEmojis()
    .then(emojis => {
      emojis.forEach(emoji => this.emojis.push(emoji))
      // return console.log(emojis)
    })
    .then(() => {
      this.render()
      this.randomEmoji()
    })
  }

  fetchAndLoadFoodEmojis() {
    this.adapter.getFoodEmojis()
    .then(emojis => {
      emojis.forEach(emoji => this.foodEmojis.push(emoji))
    })
    .then(() => {
      this.render()
    })
  }

  render() {
    const emojiArray = this.emojis.map(emoji => emoji.character)
  }

  randomEmoji() {
    this.currentEmoji = this.emojis[Math.floor(Math.random() * this.emojis.length)]
  }

  displayEmoji() {
    this.emojiContainer.innerHTML = twemoji.parse(this.currentEmoji.character)
  }

  length() {
    this.emojis.length
  }

  makeAGuess(e) {
    console.log(`The current emoji is: ${this.currentEmoji.character}`)

    let myGuess = e.target.id

    // TODO: Move this into a class method. We don't need to recreate it each time
    let foods = this.foodEmojis.map(function(element) {
      return element.character
    });

    let isFood = foods.includes(this.currentEmoji.character);

    if (isFood == true) {

      if (myGuess == "food") {
        this.keepScore(1)
        console.log("correct")
      } else {
        this.keepScore(-1)
        console.log("wrong")
      }

    } else {

      if (myGuess == "foe") {
        this.keepScore(1)
        console.log("correct")
      } else {
        this.keepScore(-1)
        console.log("wrong")
      }
    }

    this.randomEmoji()
    this.displayEmoji()

  }

  keepScore(point) {
    if (this.currentScore + point < 0) {
      this.currentScore = 0
    } else {
      this.currentScore += point
    }

    this.score.innerHTML = `${this.currentScore}`
  }



}

class Emojis {
  constructor() {
    this.emojis = []
    this.adapter = new EmojisAdapter()
    this.fetchAndLoadEmojis()
    this.length()

    this.initBindingsAndEventListeners()
  }

  initBindingsAndEventListeners() {
    this.emojiContainer = document.querySelector("#emoji")

    this.foodButton = document.querySelector("#food")
    this.foeButton = document.querySelector("#foe").addEventListener('click', (e) => {
      this.displayEmoji()
    })
    this.foodButton = document.querySelector("#food")
    this.foeButton = document.querySelector("#foe").addEventListener('click', (e) => {
      this.displayEmoji()
    })

    this.startGame = document.querySelector("#start")
    this.startGame.addEventListener('click', (e) => {

      // Start showing emojis....but this need to change while the clock is running, and refresh once a button is clicked. It shoudl stop when the clock is at zero
      this.displayEmoji()

    });
  }

  fetchAndLoadEmojis() {
    console.log("Loading emoji :P")
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

  render() {
    console.log("Rendering emojis...")
    const emojiArray = this.emojis.map(emoji => emoji.character)
    console.log(emojiArray)
  }

  randomEmoji() {
    return this.emojis[Math.floor(Math.random() * this.emojis.length)]
  }

  displayEmoji() {
    this.emojiContainer.innerHTML = this.randomEmoji().character
  }

  length() {
    this.emojis.length
  }

}

class Emojis {
  constructor() {
    this.emojis = []
    this.adapter = new EmojisAdapter()
    this.fetchAndLoadEmojis()
  }

  fetchAndLoadEmojis() {
    console.log("whomp")
    this.adapter.getEmojis().then(emojis => {
      return console.log(emojis)
    })
    .then(() => {
      this.render()
    })
  }

  render() {
    console.log("Rendering...")
  }

}

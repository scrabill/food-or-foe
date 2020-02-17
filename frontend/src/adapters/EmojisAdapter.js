class EmojisAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/api/v1/emojis"
  }

  getEmojis() {
    return fetch(this.baseURL).then(res => res.json())
  }
}

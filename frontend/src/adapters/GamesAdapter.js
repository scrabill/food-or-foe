class GamesAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/api/v1/games"
  }

  getGames() {
    return fetch(this.baseURL).then(res => res.json())
  }
}

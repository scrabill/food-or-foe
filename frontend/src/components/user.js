class User {
  constructor(userJSON) {
    this.id = userJSON.id
    this.name = userJSON.name
    this.games = userJSON.games
  }
}

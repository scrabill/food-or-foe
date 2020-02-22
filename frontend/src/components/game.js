class Game {
  constructor(gameJSON) {
    this.id = gameJSON.id
    this.score = gameJSON.score
    this.user = gameJSON.user
    this.user_id = gameJSON.user_id
  }
}

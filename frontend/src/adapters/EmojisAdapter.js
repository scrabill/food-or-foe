class EmojisAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/api/v1/emojis"
    this.baseURLFoodScope = "http://localhost:3000/api/v1/emojis/food"
  }

  getEmojis() {
    return fetch(this.baseURL).then(res => res.json())
  }

  getFoodEmojis() {
    return fetch(this.baseURLFoodScope).then(res => res.json())
  }
}

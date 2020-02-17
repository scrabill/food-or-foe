class GamesAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/api/v1/games"
  }

  getGames() {
    // return fetch(this.baseURL)
    // .then((response) => {
    //   return response.json();
    // })
    // .then((response) => {
    //   console.log(response);
    // });

    return fetch(this.baseURL).then(res => res.json())

    // return fetch(this.baseURL)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   });
  }
}
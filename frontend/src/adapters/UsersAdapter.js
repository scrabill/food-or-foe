class UsersAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/api/v1/users"
  }

  getUsers() {
    return fetch(this.baseURL).then(res => res.json())
  }
}

class UsersAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/api/v1/users"
  }

  getUsers() {
    return fetch(this.baseURL).then(res => res.json())
  }

  createUser(data) {
    return fetch(this.baseURL, {
      method: 'POST',
      headers: {
         'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
  }
}

class Users {
  constructor() {
    this.users = []
    this.adapter = new UsersAdapter()
    this.fetchAndLoadUsers()
  }

  fetchAndLoadUsers() {
    this.adapter.getUsers()
    .then(users => {
      users.forEach(user => this.users.push(user))
    })
    .then(() => {
      this.render()
    })
  }

  render() {
  }

}

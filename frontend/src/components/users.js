class Users {
  constructor() {
    this.users = []
    this.adapter = new UsersAdapter()
    this.fetchAndLoadUsers()
  }

  fetchAndLoadUsers() {
    console.log("Bzz. Loading users...")
    this.adapter.getUsers()
    .then(users => {
      users.forEach(user => this.users.push(user))

      // users.forEach(user => this.users.push(new User(user)))
      // return console.log(Users)
    })
    .then(() => {
      this.render()
    })
  }

  render() {
    console.log("Rendering...")
    console.log(this.users)
  }

}

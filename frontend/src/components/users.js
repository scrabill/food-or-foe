class Users {
  constructor() {
    this.users = []
    this.adapter = new UsersAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadUsers()
  }

  initBindingsAndEventListeners() {

  }

  fetchAndLoadUsers() {
    this.adapter.getUsers()
    .then(users => {
      users.forEach(user => this.users.push(user))
    })
    .then(() => {
    })
  }


}

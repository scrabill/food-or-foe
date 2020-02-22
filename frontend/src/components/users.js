class Users {
  constructor() {
    this.users = []
    this.adapter = new UsersAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadUsers()
  }

  initBindingsAndEventListeners() {
    this.name = document.querySelector("#name")

    this.submitButton = document.querySelector("#submit")
    this.submitButton.addEventListener('click', (e) => {
      this.createUser(e)
    });

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

  // TODO: Find or create by name
  createUser(e) {
    e.preventDefault

    const data = {
      name: this.name.value
    }

    this.adapter.createUser(data)
  }

  render() {
  }

}

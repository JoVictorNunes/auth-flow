class Users {
  #data = [
    {
      name: 'João Victor',
      email: 'joaovictornunes973@gmail.com'
    },
    {
      name: 'Renato',
      email: 'renatogaucho@gmail.com'
    }
  ]

  insert(user) {
    this.data.push(user)
  }

  findAll() {
    return this.#data
  }
}

module.exports = Users
class Products {
  #data = [
    {
      name: 'Arroz',
      price: 10,
      quantity: 150
    },
    {
      name: 'Feijão',
      price: 5,
      quantity: 300
    }
  ]

  insert(product) {
    this.data.push(product)
  }

  findAll() {
    return this.#data
  }
}

module.exports = Products
import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  * {
    margin: 2px;
  }
`

const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;

  th, td {
    border: 1px solid black;
  }
`

const Button = styled.button`
  border: 1px solid #444;
  outline: none;
  background-color: transparent;
  transition: all .2s;
  padding: 12px;

  &:hover {
    border-color: black;
    background-color: #282a36;
    color: white;
    cursor: pointer;
  }

`

const Products = (props) => {
  const [products, setProducts] = useState([])
  const [showProducts, setShowProducts] = useState(false)

  async function getProducts() {
    const response = await fetch('http://localhost:4000/products', {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      mode: 'cors',
    })

    if (response.status === 200) {
      const data = await response.json()
      setProducts(data.products)
      setShowProducts(true)
    }
  }

  function clearProducts() {
    setShowProducts(false)
  }

  return (
    <Wrapper>
      {showProducts &&
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>}

      <Button onClick={getProducts}>Obter Produtos</Button>
      <Button onClick={clearProducts}>Limpar Produtos</Button>
    </Wrapper>
  )
}

export default Products

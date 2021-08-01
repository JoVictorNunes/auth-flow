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

const Users = (props) => {
  const [users, setUsers] = useState([])
  const [showUsers, setShowUsers] = useState(false)

  async function getUsers() {
    const response = await fetch('http://localhost:4000/users', {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      mode: 'cors',
    })

    if (response.status === 200) {
      const data = await response.json()
      setUsers(data.users)
      setShowUsers(true)
    }
  }

  function clearUsers() {
    setShowUsers(false)
  }

  return (
    <Wrapper>
      {showUsers &&
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      }

      <Button onClick={getUsers}>Obter Usuários</Button>
      <Button onClick={clearUsers}>Limpar Usuários</Button>
    </Wrapper>
  )
}

export default Users

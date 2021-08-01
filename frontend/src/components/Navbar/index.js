import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthenticateContext } from '../AuthContext'
import styled from 'styled-components'

const Wraper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 72px;
  background-color: #282a36;
`

const List = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;

  & a {
    text-decoration: none;
    color: #f8f8f2;
  }

  & li {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & li:not(:last-child) {
    margin-right: 12px;
  }
`

const Navbar = () => {
  const { handleLogout } = useContext(AuthenticateContext)

  function logout(e) {
    e.preventDefault()
    handleLogout()
  }

  return (
    <Wraper>
      <List>
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/login" onClick={logout}>Logout</Link></li>
      </List>
    </Wraper>
  )
}

export default Navbar

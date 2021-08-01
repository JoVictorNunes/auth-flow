import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Products from './Products'
import Users from './Users'

const Main = styled.div`
  display: flex;
  margin-top: 10px;
`

const Dashboard = () => {

  return (
    <>
      <Navbar></Navbar>
      <Main>
        <Products></Products>
        <Users></Users>
      </Main>
    </>
  )
}

export default Dashboard

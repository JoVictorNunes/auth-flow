import React, { useEffect, useState } from 'react'
import history from '../history'

export const AuthenticateContext = React.createContext();

export const AuthContext = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false);

  async function handleLogin(data) {
    const response = await fetch('http://localhost:4000/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(data)
    })

    if (response.status === 200) {
      const { token } = await response.json()
      
      if (token) {
        localStorage.setItem('token', token)
        setLoggedIn(true)
        history.push('/dashboard')
      }
    }
  }

  function handleLogout() {
    localStorage.removeItem('token')
    setLoggedIn(false)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      setLoggedIn(true)
      history.push('/dashboard')
    }

    setLoading(false)
  }, [])

  return (
    <AuthenticateContext.Provider value={{ loading, loggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthenticateContext.Provider>
  )
}

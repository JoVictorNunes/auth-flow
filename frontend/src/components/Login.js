import React, { useContext, useState } from 'react'
import { AuthenticateContext } from './AuthContext'

const Login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const { handleLogin } = useContext(AuthenticateContext)

  function handleChange(e) {
    const { target } = e
    const name = target.name
    const value = target.value

    if (name === 'name') {
      setName(value)
    }
    else if (name === 'password') {
      setPassword(value)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    handleLogin({ name, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input type='text' name='name' value={name} onChange={handleChange} />
      <label htmlFor='password'>Password:</label>
      <input type='text' name='password' value={password} onChange={handleChange} />
      <input type='submit' value='Login' />
    </form>
  )
}

export default Login

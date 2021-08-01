import React, { useContext } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { AuthContext, AuthenticateContext } from './components/AuthContext'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import history from './history'

const CustomRoute = ({ isPrivate, ...props }) => {
  const { loggedIn, loading } = useContext(AuthenticateContext)

  if (loading) return <h1>Loading</h1>

  if (isPrivate && !loggedIn) {
    return <Redirect to="/login" />
  }

  return <Route {...props} />
}

function App() {
  return (
    <AuthContext>
      <Router history={history}>
        <Switch>
          <CustomRoute exact path="/login" component={Login} />
          <CustomRoute isPrivate exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </AuthContext>
  )
}

export default App

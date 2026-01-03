import React from 'react'
import { useAuth } from '../hooks/useAuth'

const Login = () => {
const {login}=useAuth();

  return (
    <form onSubmit={login}>
      <input name='email' />
      <input name='password' />
      <button>Login</button>
    </form>
  )
}

export default Login

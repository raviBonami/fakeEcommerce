
import React from 'react'
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import { useState } from 'react'
import '../styles/welcome.css'

function Welcome() {
  const [form, setForm] = useState(0)

  const handleLogin = () => {
    setForm(1)
  }

  const handleSignup = () => {
    setForm(2)
  }
  return (
    <div>
      <h1 className='top-heading' >Welcome to our site user</h1>
      <button onClick={handleSignup} >Signup</button>
      <button onClick={handleLogin} >Login</button>
      {form === 1 ? <Login /> : form === 2 ? <Signup /> : null}

      </div>
  )
}

export default Welcome
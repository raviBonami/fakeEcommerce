
import React from 'react'
import Signup from '../signup/Signup';
import Login from '../login/Login';
import {useState} from 'react'
import '../styles/startup.css'

function Startup() {
    const [form, setForm] = useState(0)

    const handleLogin = () => {
      setForm(1)
    }
  
    const handleSignup = () => {
      setForm(2)
    }
  return (
    <div>
        <h2 className='top-heading' >Welcome to our E-Commerce website</h2>
        <h4 className='sub-heading' >Login or Sign Up to continue</h4>
        <button onClick={handleSignup} >Signup</button>
      <button onClick={handleLogin} >Login</button>
      {form === 1 ? <Login/> : form === 2 ? <Signup /> : null }
    </div>

  )
}

export default Startup
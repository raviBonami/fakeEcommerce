
import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/navbar.css'
import alpha1 from '../../../shared/images/logo/alpha1.jpg'

function Navbar() {
  return (
    <div className='navbar-component' >
        <img src={alpha1} />
        <li> <Link to='/user/home' >HOME</Link></li>
        <li> <Link to='/user/about' >ABOUT</Link></li>
        <li> <Link to='/user/contact' >CONTACT</Link></li>
        <li> <Link to='/user/cart' >CART</Link></li>
    </div>
  )
}

export default Navbar
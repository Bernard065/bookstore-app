import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className='bookstore-heading'>Imagination Bookstore</div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/book">Books</Link></li>
            <li><Link to="/login">Admin Login</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact-us">Contact US</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            {/* <li><Link to='/cart'>My Cart</Link></li> */}
        </ul>
    </nav>
  )
}

export default Navbar
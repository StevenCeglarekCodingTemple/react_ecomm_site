import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header className='site-header'>
        <NavLink to="/" className='site-logo'>My ECOMM Site</NavLink>
        <nav className='navbar'>
            <ul>
                <li>
                    <NavLink to='/' className='nav-links'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className='nav-links'>Contact Us</NavLink>
                </li>
                <li>
                    <NavLink to='/search' className='nav-links'>Search</NavLink>
                </li>
            </ul>

        </nav>
    </header>
  )
}

export default NavBar
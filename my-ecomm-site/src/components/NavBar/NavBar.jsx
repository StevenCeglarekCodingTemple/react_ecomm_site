import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import './NavBar.css'

const NavBar = () => {
    const { cartItems } = useCart();

  return (
    <header className='site-header'>
        <NavLink to="/" className='site-logo'>My ECOMM Site</NavLink>
        <nav className='navbar'>
            <ul>
                <li>
                    <NavLink to='/' className='nav-links'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/contact_us' className='nav-links'>Contact Us</NavLink>
                </li>
                <li>
                    <NavLink to='/search' className='nav-links'>Search</NavLink>
                </li>
                <li>
                    <NavLink to='/cart' className='nav-links'>{cartItems.length > 0 ? `Cart(${cartItems.length})` : 'Cart'}</NavLink>
                </li>
            </ul>

        </nav>
    </header>
  )
}

export default NavBar
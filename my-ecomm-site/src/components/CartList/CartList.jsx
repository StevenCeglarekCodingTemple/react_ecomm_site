import React from 'react'
import { useCart } from '../../contexts/CartContext'
import CartItemCard from '../CartItemCard/CartItemCard';
import './CartList.css';

const CartList = () => {
    const { cartItems } = useCart();

  return (
    <div className='cart-list'>
        {cartItems.map((item, idx) => (
            <CartItemCard key={idx} item={item} />
        ))}
    </div>
  )
}

export default CartList;
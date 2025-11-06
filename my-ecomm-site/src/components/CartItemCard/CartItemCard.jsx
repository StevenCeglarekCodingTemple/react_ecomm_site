import React from 'react'
import "./CartItemCard.css";

const CartItemCard = ({ item }) => {
  return (
    <div className='cart-item'>
      <div className='item-image'>
        <img src={item.thumbnail} alt="" />
      </div>
        <h3>{item.title}</h3>
        <p>{item.brand}</p>
        <p>{item.quantity}</p>
        <div className='item-price'>
          <p>${item.price}</p>
        </div>
    </div>
  )
}

export default CartItemCard
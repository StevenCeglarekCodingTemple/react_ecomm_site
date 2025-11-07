import React from 'react'
import { useCart } from '../../contexts/CartContext'
import CartItemCard from '../CartItemCard/CartItemCard';
import './CartList.css';

const CartList = () => {
    const { cartItems, total } = useCart();

  return (
    <div className='cart-list container-fluid'>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Brand</th>
            <th>Qty</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {cartItems.map((item, idx) => (
              <CartItemCard key={idx} item={item} />
            ))}
        </tbody>
        <tfoot>
          <tr>
          <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>${total.toFixed(2)}</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default CartList;
import React from 'react'
import { useCart } from '../../contexts/CartContext';
import CheckoutCard from '../CheckoutCard/CheckoutCard';

const CheckoutList = () => {
    const { cartItems, total } = useCart();

  return (
    <div className='container-fluid'>
      
        <table className='table table-hover'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
            {cartItems.map((item, idx) => (
              <CheckoutCard key={idx} item={item} />
            ))}
        </tbody>
        <tfoot>
          <tr>
          <th></th>
            <th></th>
            <th></th>
            <th>${total.toFixed(2)}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default CheckoutList
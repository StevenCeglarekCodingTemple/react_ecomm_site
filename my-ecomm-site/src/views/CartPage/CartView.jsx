import React from 'react'
import CartList from '../../components/CartList/CartList'
import { useNavigate } from 'react-router-dom';

const CartView = () => {
  const navigate = useNavigate();

  return (
    <div className='container-fluid'>
        <CartList />

        <div className='d-flex justify-content-center m-3'>
          <button onClick={() => {navigate('/checkout')}} className='btn btn-outline-primary'>Go to Checkout</button>
        </div>
    </div>
  )
}

export default CartView
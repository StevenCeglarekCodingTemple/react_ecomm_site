import React from 'react'
import CartList from '../../components/CartList/CartList'

const CartView = () => {

  return (
    <div className='container-fluid'>
        <CartList />

        <div className='d-flex justify-content-center m-3'>
          <button className='btn btn-outline-primary'>Go to Checkout</button>
        </div>
    </div>
  )
}

export default CartView
import React, { useState } from 'react'
import CheckoutList from '../../components/CheckoutList/CheckoutList'
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'

const CheckoutView = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  })

  return (
    <div className='container-fluid'>
      <div className='row'>

        <div className='col-8'>
          <CheckoutForm setFormData={setFormData} formData={formData} />
        </div>
        <div className='col-4'>
          <CheckoutList />

        </div>
      </div>
    </div>
  )
}

export default CheckoutView
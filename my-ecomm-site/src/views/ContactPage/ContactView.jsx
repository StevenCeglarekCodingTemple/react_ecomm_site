import React from 'react'
import { FormControl } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactView.css'

const ContactView = () => {
  return (
    <div className='contact_us container-fluid'>
        <div className='row'>
            <div className='d-flex flex-column align-items-center justify-content-center header'>
                <h1>Contact Us</h1>

                <p>Please contact us on any issues, or any fedback you would like to give us about our site. Thank you!</p>
            </div>
            <div className='col-2'></div>
            <div className='col-8'>
                <form action="">
                    <div className='form-group inputs mb-2'>
                        <label className='form-label' htmlFor="email">Email:</label>
                        <input type="email" className='form-control' placeholder='Enter Email' />
                    </div>
                    <div className='row'>
                        <div className='col-6 form-group inputs mb-2'>
                            <label className='form-label' htmlFor="firstName">First Name:</label>
                            <input type="text" className='form-control' placeholder='Enter First Name' />
                        </div>
                        <div className='col-6 form-group inputs mb-2'>
                            <label className='form-label' htmlFor="lastName">Last Name:</label>
                            <input type="text" className='form-control' placeholder='Enter Last Name' />
                        </div>

                    </div>
                    <div className='form-group inputs mb-2'>
                        <label className='form-label' htmlFor="message">Message:</label>
                        <textarea name="" className='form-control' id="" placeholder='Write Message Here...'></textarea>
                    </div>

                    <div className='form-group d-flex justify-content-center m-3'>
                        <button className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
            <div className='col-2'></div>
        </div>
    </div>
  )
}

export default ContactView
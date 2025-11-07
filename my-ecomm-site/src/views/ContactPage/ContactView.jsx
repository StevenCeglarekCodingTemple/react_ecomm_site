import React from 'react'
import { FormControl } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactView.css'
import ContactForm from '../../components/ContactForm/ContactForm';

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
                <ContactForm />
            </div>
            <div className='col-2'></div>
        </div>
    </div>
  )
}

export default ContactView
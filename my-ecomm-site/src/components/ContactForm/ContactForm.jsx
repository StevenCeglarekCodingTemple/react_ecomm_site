import React from 'react'

const ContactForm = () => {
    return (
        <div>
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
    )
}

export default ContactForm
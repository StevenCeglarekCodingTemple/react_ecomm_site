import React, { useState } from 'react'

const CheckoutForm = ({ formData, setFormData }) => {
    const [errors, setErrors] = useState("");

    const usStateAbbreviations = [
        "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
        "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
        "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
        "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
        "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
      ];

    const validateField = (name, value) => {
        const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        switch (name) {
            case 'email':
                return emailPattern.test(value) ? '' : 'Invalid Email Format';
            case 'firstName':
                return value.length > 0 ? '': 'Must include first name';
            case 'lastName':
                return value.length > 0 ? '': 'Must include last name';
            case 'state':
                    return usStateAbbreviations.includes(value) ? '': 'Must be a valid state';
            case 'phone': // check if a phone number, using regex
                return /^\d{10}$/.test(value) ? '': /^\d{3}-\d{3}-\d{4}$/.test(value) ? '' : 'Invalid Phone';
            default:
                return '';
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value}))

        const error = validateField(name, value);
        setErrors(prevData => ({...prevData, [name]: error}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            name: '',
            phone: '',
            email: '',
            password: ''
        })
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-6 form-group inputs mt-4 mb-4'>
                        {/* <label className='form-label' htmlFor="firstName">First Name:</label> */}
                        <input name='firstName' onChange={handleChange} type="text" className='form-control' placeholder='Enter First Name' />
                        {errors.firstName && <span className='text-danger'>{errors.firstName}</span>}
                    </div>
                    <div className='col-6 form-group inputs mt-4 mb-4'>
                        {/* <label className='form-label' htmlFor="lastName">Last Name:</label> */}
                        <input name='lastName' onChange={handleChange} type="text" className='form-control' placeholder='Enter Last Name' />
                        {errors.lastName && <span className='text-danger'>{errors.lastName}</span>}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4 form-group inputs mb-4'>
                        {/* <label className='form-label' htmlFor="street">Street:</label> */}
                        <input type="text" className='form-control' placeholder='Street' />
                    </div>
                    <div className='col-3 form-group inputs mb-4'>
                        {/* <label className='form-label' htmlFor="city">City:</label> */}
                        <input type="text" className='form-control' placeholder='City' />
                    </div>
                    <div className='col-2 form-group inputs mb-4'>
                        {/* <label className='form-label' htmlFor="state">State:</label> */}
                        <input name='state' onChange={handleChange} type="text" className='form-control' placeholder='State' />
                        {errors.state && <span className='text-danger'>{errors.state}</span>}
                    </div>
                    <div className='col-2 form-group inputs mb-4'>
                        {/* <label className='form-label' htmlFor="zip">Zip:</label> */}
                        <input type="text" className='form-control' placeholder='Zip' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col mb-4'>
                        {/* <label className='form-label' htmlFor="email">Email:</label> */}
                        <input name='email' onChange={handleChange}  type="text" className='form-control' placeholder='Email' />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='col mb-4'>
                        {/* <label className='form-label' htmlFor="phone">Phone:</label> */}
                        <input name='phone' onChange={handleChange}  type="text" className='form-control' placeholder='Phone' />
                        {errors.phone && <span className='text-danger'>{errors.phone}</span>}
                    </div>
                </div>  

                <div className='form-group d-flex justify-content-center m-3'>
                    <button className='btn btn-primary'>Checkout</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm
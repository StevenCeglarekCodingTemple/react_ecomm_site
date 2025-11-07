import React from 'react'

const CheckoutCard = ({ item }) => {

    return (
        <tr>
          <td>
            <div className='item-image'>
              <img src={item.thumbnail} alt="" />
            </div>
          </td>
          <td>
            <p>{item.title}</p>
          </td>
          <td>
            <p>{item.quantity}</p>
          </td>
          <td>
            <div className='item-price'>
              <p>${item.quantity > 1 ? (item.price * item.quantity).toFixed(2) : item.price.toFixed(2)}</p>
            </div>
          </td>
        </tr>
    )
}

export default CheckoutCard
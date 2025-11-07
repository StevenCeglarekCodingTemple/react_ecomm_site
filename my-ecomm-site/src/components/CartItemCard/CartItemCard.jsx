import React from 'react'
import "./CartItemCard.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from '../../contexts/CartContext';

const CartItemCard = ({ item }) => {
  const { removeItem } = useCart();

  return (
      <tr>
        <td>
          <div className='item-image'>
            <img src={item.thumbnail} alt="" />
          </div>
        </td>
        <td>
          <h3>{item.title}</h3>
        </td>
        <td>
          <p>{item.brand}</p>
        </td>
        <td>
          <p>{item.quantity}</p>
        </td>
        <td>
          <div className='item-price'>
            <p>${item.quantity > 1 ? item.price * item.quantity : item.price}</p>
          </div>
        </td>
        <td>
          <div onClick={() => removeItem(item.id)}>
            <DeleteIcon />
          </div>
        </td>
      </tr>
  )
}

export default CartItemCard
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import './SingleProductView.css';

const SingleProductView = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);

                const data = await response.json();

                console.log(data);
                setProduct(data);

                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }

        fetchProduct();
    }, []);

    if (loading) {
        return <div>Loading Product Details...</div>
      }

  return (
    <div className='container'>
        <div className='product-detail-card'>
            <div className='product-header'>
                <h1>{product.title}</h1>
                <img src={product.images[0]} alt="" width={'300px'} /> 
                <p>{product.description}</p>
                <h3>Reviews</h3>

            </div>
            <ul className='reviews'>
            {product.reviews.map((review, idx) => (
                    <li key={idx}>
                        <h4><Rating name="read-only" value={review.rating} readOnly /> {review.reviewerName}</h4>
                        <p>{review.comment}</p>                
                    </li>
            ))}
                </ul>
        </div>
    </div>
  )
}

export default SingleProductView
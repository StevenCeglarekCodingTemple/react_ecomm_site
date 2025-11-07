import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import ProductList from '../../components/ProductList/ProductList';

const HomePageView = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');

        const data = await response.json();

        setProducts(data.products);
        setLoading(false);

      } catch (err) {
        console.log(err);
      }
    }

    fetchProducts();
  }, []); // empty dependency array which will only fire off when mounted

  if (loading) {
    return <div>Loading Products...</div>
  }

  return (
    <div>
      <ProductList products={products} />
    </div>
  )
}

export default HomePageView
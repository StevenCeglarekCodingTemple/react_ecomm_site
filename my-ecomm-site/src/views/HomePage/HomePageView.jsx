import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import ProductList from '../../components/ProductList/ProductList';

const HomePageView = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');

        const data = await response.json();

        console.log(data.products)

        setProducts(data.products);

      } catch (err) {
        console.log(err);
      }
    }

    fetchProducts();
  }, []); // empty dependency array which will only fire off when mounted

  return (
    <div>
      <ProductList products={products} />
    </div>
  )
}

export default HomePageView
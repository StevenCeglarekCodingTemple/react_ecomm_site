import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ProductList from '../../components/ProductList/ProductList'

const ProductSearchView = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [submitSearch, setSubmitSearch] = useState(localStorage.getItem('prevSearch') || '')
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            if (submitSearch) {
                try {
                    const response = await fetch(`https://dummyjson.com/products/search?q=${submitSearch}`)

                    if (!response.ok) {
                        throw new Error('Error fetching products', response.status)
                    }

                    const productData = await response.json();
                    setProducts(productData.products);
                    setLoading(false);
                } catch (err) {
                    console.log(err)
                }
            }
        }

        fetchProducts();
    }, [submitSearch])

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('prevSearch', searchTerm);
        setSubmitSearch(searchTerm);
        setSearchTerm('');
    }

    if (loading) {
        return <div>Loading Products...</div>
      }

  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-2'>

            </div>
            <div className='col-8'>
                <form action="" onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="search">Search:</label>
                        <input className='form-control' type="text" name='search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}  />
                    </div>
                    <div>
                        <button className='btn btn-outline-info'>Search</button>
                    </div>
                </form>

            </div>
            <div className='col-2'>

            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <ProductList products={products} />
            </div>
        </div>
    </div>
  )
}

export default ProductSearchView
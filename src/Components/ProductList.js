import React from 'react'
import ProductItem from './ProductItem'
import products from '../assets/data/products'

const ProductList = () => {
    const list = products.map(product=> 
    <ProductItem productName={product.name} productImage={product.image} productPrice={product.price}/>
);
  return (
    <div className='shelf'>
      {list}
    </div>
  )
}

export default ProductList

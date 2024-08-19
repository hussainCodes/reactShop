import React from 'react'
import '../assets/CSS/style.css'
import products from '../assets/data/products.js'

const ProductItem = ({productName, productImage, productPrice}) => {
  return (
    <div className='product-container'>
          <h3>{productName}</h3>
        <img className='product-img' src= {productImage} alt='image'/>
          <h4>Price: {productPrice} Fils</h4>
      </div>
  )
}

export default ProductItem

import React from 'react'
import '../assets/CSS/style.css'
import shopImage from '../assets/media/shop.png'
import { useState } from 'react';

const Header = () => {

    const [count, setCount] = useState(0)
function add() {
    setCount(count+1);
}

  return (
    <div className='shop'>
        <h1>Bagala</h1>
        <h4>We Have every thing </h4>
        <div className='visitor'>
            <label>{count} visitor</label>
            <button onClick={add}>Visited</button>
        </div>

        <img className='shop-img' src={shopImage} alt="shop image"/>

    </div>
  )
}

export default Header

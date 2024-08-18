import logo from './logo.svg';
import './App.css';
import "./assets/CSS/style.css";
import products from './assets/data/products';
import shopImage from "./assets/media/shop.png";


function App() {
    let productsList = products.map(product => 
      <div className='product-container'>
          <h3>{product.name}</h3>
          <img className='product-img' src= {product.image} alt='image'/>
          <h4>Price: {product.price} Fils</h4>
      </div>
         );

  return (
    <div className='shop'>
        <h1>Bagala</h1>
        <h4>We Have every thing </h4>
        <img className='shop-img' src={shopImage} alt="shop image"/>

        <div className='shelf'>
        {productsList}
        </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/css/style.css';
import ProductList from './Components/Shopping card/Productlist';
import Cart from './Components/Shopping card/Cart';
import './Components/Assert/110356258.webp'
import './Components/Assert/dress.webp'
import './Components/Assert/tv.jpg'
import './Components/Assert/phone.avif'
import './Components/Assert/laptop.avif'
import './Components/Assert/images.jpeg'

const App = () => {
  const [cart, setCart] = useState([]);
  
  const products = [
    { id: 1, name: 'TV 1', description: 'This is TV 1' , image:'./Components/Assert/tv.jpg' },
    { id: 2, name: 'PHONE 2', description: 'This is PHONE 2',image:'./Components/Assert/phone.avif' },
    { id: 3, name: 'LAPTOP 3', description: 'This is LAPTOP 3',image:'./Components/Assert/laptop.avif' },
    { id: 4, name: 'DRESS 4', description: 'This is DRESS 4',image:'./Components/Assert/dress.webp' },
    { id: 5, name: 'WATCH 5', description: 'This is WATCH 5' ,image:'./Components/Assert/watch.webp'},
    { id: 6, name: 'AC 6', description: 'This is AC 6' ,image:'./Components/Assert/110356258.webp'},
  
  ];

  const addToCart = (id) => {
    setCart([...cart, id]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item !== id));
  };

  return (
    <div className="container">
      <h1 className="my-4">Shopping Cart</h1>
      <Cart cart={cart} products={products} />
      <ProductList
        products={products}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cart={cart}
      />
    </div>
  );
};

export default App;
import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { ProductList } from './ProductList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Checkout } from './Checkout';
import { ProductDetail } from './ProductDetails';
import { CartContext } from './CartContext';
import { useState } from "react"

function App() {

  const [cartItems, setCartItems] = useState([])

  return (
    <BrowserRouter>
    
      <CartContext.Provider value={{ cartItems, setCartItems }}>

        {/* // Normal 做法
      // <div className="App">
      // <ProductList/>
      // </div> */}

        {/* //Connect Router 做法 */}

        {/* <a href ="/checkout">Shopping Cart(a tag)</a> 平時HTML既做法，其實都OKAY，但就慢D囉 */}
        <Link to="/">Main Page</Link>
        <Link to="/product">Product Information</Link>
        <Link to="/checkout">Shopping Cart</Link>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* Orginal Version */}
          {/* <Route path="/product_detail" element={<ProductDetail/>}/> */}

          <Route path="/product" element={<ProductDetail />}>
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<p>ERROR 404, Please Try other path plz</p>} /> {/* '*' 係指當唔係以上果幾條PATH，就會去左呢版，就好似平時404 NOT FOUND咁*/}
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;

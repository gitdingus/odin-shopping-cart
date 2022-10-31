import React, { useEffect } from 'react';
import Shop from './components/Shop.js';
import ShoppingCartDetails from './components/ShoppingCartDetails.js';
import useShoppingCart from './components/useShoppingCart.js';
import './App.css';

function App() {
  const { 
    shoppingCart,
    addToShoppingCart,
    removeFromShoppingCart,
    editQuantityOfProduct,
  } = useShoppingCart();

  useEffect(() => {
    console.log(shoppingCart);
  })

  return (
    <div>
      <h1>There are {shoppingCart.length} items in your shopping cart</h1>
      <Shop 
        addToShoppingCart={addToShoppingCart}
      />
      <ShoppingCartDetails
        shoppingCart={shoppingCart}
      />
    </div>
  );
}

export default App;

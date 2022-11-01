import React, { useEffect } from 'react';
import Shop from './components/Shop.js';
import ShoppingCartDetails from './components/ShoppingCartDetails.js';
import Header from './components/Header.js';
import useShoppingCart from './components/useShoppingCart.js';
import './App.css';

function App() {
  const { 
    shoppingCart,
    addToShoppingCart,
    removeFromShoppingCart,
    editQuantityOfProduct,
  } = useShoppingCart();

  return (
    <div>
      <Header itemsInCart={
        shoppingCart.reduce((totalItems, product) => {
          return totalItems + product.quantity;
        }, 0)
      } />
      <Shop 
        addToShoppingCart={addToShoppingCart}
      />
      <ShoppingCartDetails
        shoppingCart={shoppingCart}
        removeProduct={removeFromShoppingCart}
        editQuantity={editQuantityOfProduct}
      />
    </div>
  );
}

export default App;

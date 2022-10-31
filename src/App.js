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

  return (
    <div>
      <h1>There are&nbsp;
        {
          shoppingCart.reduce((count, item) => {
            return count += item.quantity;
          }, 0)
        } items in your shopping cart</h1>
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

import { useState } from 'react';

function useShoppingCart() {
  const [ shoppingCart, setShoppingCart ] = useState([]);

  const addToShoppingCart = (product) => {
    const newProduct = {
      ...product,
      quantity: 1,
    }
    setShoppingCart([...shoppingCart, newProduct]);
  };

  const removeFromShoppingCart = (uuid) => {
    console.log(`Remove Product: ${uuid}`);
  };

  const editQuantityOfProduct = (uuid, newQuantity) => {
    console.log(`Edit Product: ${uuid}, New Quantity: ${newQuantity}`);
  };

  return {
    shoppingCart,
    addToShoppingCart,
    removeFromShoppingCart,
    editQuantityOfProduct,
  };
}

export default useShoppingCart;
import { useState } from 'react';

function useShoppingCart() {
  const [ shoppingCart, setShoppingCart ] = useState([]);

  const addToShoppingCart = (newProduct) => {
    let newShoppingCart = [...shoppingCart];
    const existingProduct = newShoppingCart.find((product) => product.uuid === newProduct.uuid);

    if (existingProduct !== undefined){
      existingProduct.quantity += 1;
    } else {
      const product = {
        ...newProduct,
        quantity: 1,
      };
      newShoppingCart = [...newShoppingCart, product];
    }
  
    setShoppingCart(newShoppingCart);
  };

  const removeFromShoppingCart = (uuid) => {
    const newShoppingCart = shoppingCart.filter((product) => uuid !== product.uuid);

    setShoppingCart(newShoppingCart);
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
import { useState } from 'react';

function useShoppingCart() {
  const [ shoppingCart, setShoppingCart ] = useState([]);

  const addToShoppingCart = (newProduct) => {
    if (newProduct.quantity === undefined) {
      newProduct.quantity = 1;
    }

    let newShoppingCart = [...shoppingCart];
    const existingProduct = newShoppingCart.find((product) => product.uuid === newProduct.uuid);

    if (existingProduct !== undefined){
      existingProduct.quantity += newProduct.quantity;
    } else {
      const product = {...newProduct};
      newShoppingCart = [...newShoppingCart, product];
    }
  
    setShoppingCart(newShoppingCart);
  };

  const removeFromShoppingCart = (uuid) => {
    const newShoppingCart = shoppingCart.filter((product) => uuid !== product.uuid);

    setShoppingCart(newShoppingCart);
  };

  const editQuantityOfProduct = (uuid, newQuantity) => {
    if (newQuantity < 1) {
      return;
    }
    let newShoppingCart = [...shoppingCart];
    const existingProduct = newShoppingCart.find((product) => product.uuid === uuid);

    existingProduct.quantity = newQuantity;

    setShoppingCart(newShoppingCart);
  };

  return {
    shoppingCart,
    addToShoppingCart,
    removeFromShoppingCart,
    editQuantityOfProduct,
  };
}

export default useShoppingCart;
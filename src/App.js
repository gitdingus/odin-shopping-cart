import React from 'react';
import Root from './routes/Root';
import Home from './routes/Home.js';
import Shop from './routes/Shop.js';
import ShoppingCartDetails from './routes/ShoppingCartDetails.js';
import ProductDetails, { loader as productDetailsLoader } from './routes/ProductDetails.js';
import './App.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import useShoppingCart from './components/useShoppingCart.js';

function App() {
  const {     
    shoppingCart,
    addToShoppingCart,
    removeFromShoppingCart,
    editQuantityOfProduct,
  } = useShoppingCart();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root shoppingCart={shoppingCart} />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'shop',
          element: <Shop addToShoppingCart={addToShoppingCart} />,
        },
        {
          path: 'cart',
          element: <ShoppingCartDetails shoppingCart={shoppingCart} editQuantity={editQuantityOfProduct} removeProduct={removeFromShoppingCart} />,
        },
        {
          path: 'shop/:uuid',
          element: <ProductDetails addToCart={addToShoppingCart} />,
          loader: productDetailsLoader,
        },
      ]
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;

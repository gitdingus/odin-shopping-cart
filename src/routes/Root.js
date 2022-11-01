import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header.js';

function Root({shoppingCart}) {
  return (
    <>
      <Header itemsInCart={
        shoppingCart.reduce((totalItems, product) => {
          return totalItems + product.quantity;
        }, 0)
      } />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
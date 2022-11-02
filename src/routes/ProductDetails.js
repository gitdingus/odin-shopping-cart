import React from 'react';
import productList from '../product-list.js';

function ProductDetails({ uuid }){
  const product = productList.find((product) => uuid === product.uuid);

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  )
}

export default ProductDetails

import React, { useState } from 'react';
import ProductCollection from './ProductCollection.js';
import productList from '../product-list.js';

function Shop({addToShoppingCart}) {
  const [products, setProducts] = useState(productList);

  return (
    <div>
      <ProductCollection 
        productList={products}
        requestAddToCart={addToShoppingCart}
      />
    </div>
  )
}

export default Shop;
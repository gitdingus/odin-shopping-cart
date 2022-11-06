import React, { useState } from 'react';
import ProductCollection from '../components/ProductCollection.js';
import productList from '../product-list.js';
import styles from './styles/shop.module.css';

function Shop({addToShoppingCart}) {
  const [products, setProducts] = useState(productList);

  return (
    <div className={styles.shopContainer}>
      <h1>Shop</h1>
      <ProductCollection 
        productList={products}
        requestAddToCart={addToShoppingCart}
      />
    </div>
  )
}

export default Shop;
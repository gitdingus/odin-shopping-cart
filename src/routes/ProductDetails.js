import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import productList from '../product-list.js';
import styles from './styles/product-details.module.css';

async function loader({ params }) {
  const product = productList.find((product) => params.uuid === product.uuid);
  return product;
}

function ProductDetails({ addToCart }){
  const product = useLoaderData();
  const [quantity, setQuantity] = useState(1);

  const quantityChanged = (newQuantity) => {
    if (newQuantity < 1) {
      return;
    }
    setQuantity(newQuantity);
  }

  const handleAddToCart = () => {
    product.quantity = quantity;
    addToCart(product);
  }

  return (
    <div className={styles.productDetails}>
      <div className={styles.productImage}>
        <img src={product.imagePath} alt={product.title} />
      </div>
      <div className={styles.productInfo}>
        <h1>{product.title}</h1>
        <div>
          <div className={styles.price}>
            <p>Price per unit:</p>
            <p>{`$${product.price}`}</p>
          </div>
          <div className={styles.addToCart}>
            <div>
              <p>Quantity:&nbsp;</p>
              <button type="button" onClick={() => quantityChanged(quantity - 1)}>-</button>
              <input type="text" value={quantity} readOnly={true} />
              <button type="button" onClick={() => quantityChanged(quantity + 1)}>+</button>
            </div>
            <button type="button" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;
export { loader };
import React from 'react';
import styles from './styles/cart-button.module.css';
import cartOutline from '../images/cart-outline.svg';

function CartButton({itemsInCart}) {
  return (
    <div className={styles.link}>
      <img src={cartOutline} alt={`Shopping cart: ${itemsInCart} items`} />
      <p>{itemsInCart}</p>
    </div>
  )
}

export default CartButton;
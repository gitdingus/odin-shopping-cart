import React from 'react';
import styles from './styles/cart-button.module.css';
import cartOutline from '../images/cart-outline.svg';

function CartButton({itemsInCart}) {
  return (
    <a className={styles.link} href="">
      <img src={cartOutline} alt={`Shopping cart: ${itemsInCart} items`} />
      <p>{itemsInCart}</p>
    </a>
  )
}

export default CartButton;
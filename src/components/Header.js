import React from 'react';
import CartButton from './CartButton.js';
import styles from './styles/header.module.css';

function Header({itemsInCart}) {
  return (
    <div className={styles.header}>
      <h1>Tools Emporium</h1>
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <CartButton itemsInCart={itemsInCart} />
      </ul>
    </div>
  )
}

export default Header;
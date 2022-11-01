import React from 'react';
import CartButton from './CartButton.js';
import styles from './styles/header.module.css';
import { Link } from 'react-router-dom';

function Header({itemsInCart}) {
  return (
    <div className={styles.header}>
      <h1>Tools Emporium</h1>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'shop'}>Shop</Link></li>
        <li><Link to={'cart'}><CartButton itemsInCart={itemsInCart} /></Link></li>
      </ul>
    </div>
  )
}

export default Header;
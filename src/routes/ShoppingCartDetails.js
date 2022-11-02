import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/shopping-cart-details.module.css';

function ShoppingCartDetails({shoppingCart, removeProduct, editQuantity}) {
  if (shoppingCart.length < 1) {
    return <p>Shopping Cart is empty</p>
  }

  const SHIP_RATE = 14.99;
  let subTotal = shoppingCart.reduce((total, product) => {
    return total + (product.price * product.quantity);
  }, 0);

  subTotal = Number.parseFloat(subTotal).toFixed(2);

  return (
    <div className={styles.cart}>
      <table className={styles.cartDetails}>
        <colgroup>
          <col className={styles.product} />
          <col className={styles.price} />
          <col className={styles.quantity} />
          <col className={styles.total} />
          <col className={styles.remove} />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {
            shoppingCart.map((product) => {
              const {
                uuid,
                title,
                imagePath,
                price,
                quantity
              } = product;
              return (
                <tr key={uuid}>
                  <td>{title}</td>
                  <td className={styles.amount}>{price}</td>
                  <td className={styles.quantityCell}>
                    <button type="button" onClick={() => {
                      editQuantity(uuid, quantity - 1);
                    }}>
                      -
                    </button>
                    <input type="text" value={quantity} readOnly={true} />
                    <button type="button" onClick={() => {
                      editQuantity(uuid, quantity + 1);
                    }}>
                      +
                    </button>
                  </td>
                  <td className={styles.amount}>{Number.parseFloat(price * quantity).toFixed(2)}</td>
                  <td><button type="button" onClick={() => removeProduct(uuid)}>Remove</button></td>
                </tr>
              );
            })
          }
          <tr>
            <td />
          </tr>
          <tr>
            <td />
            <td />
            <th>Subtotal</th>
            <td className={styles.amount}>
              { subTotal }
            </td>
          </tr>
          <tr>
            <td />
            <td />
            <th>Shipping</th>
            <td className={styles.amount}>{SHIP_RATE}</td>
          </tr>
          <tr>
            <td />
            <td />
            <th>Total</th>
            <td className={styles.amount}>{Number.parseFloat(Number.parseFloat(subTotal) + SHIP_RATE).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

ShoppingCartDetails.propTypes = {
  shoppingCart: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
};

export default ShoppingCartDetails;
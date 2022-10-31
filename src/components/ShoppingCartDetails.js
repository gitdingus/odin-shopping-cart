import React from 'react';
import PropTypes from 'prop-types';

function ShoppingCartDetails({shoppingCart, removeProduct, editQuantity}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
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
                <td>{price}</td>
                <td>
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
                <td>{price * quantity}</td>
                <td><button type="button" onClick={() => removeProduct(uuid)}>Remove</button></td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
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
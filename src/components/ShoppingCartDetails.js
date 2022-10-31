import React from 'react';
import PropTypes from 'prop-types';

function ShoppingCartDetails({shoppingCart}) {
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
                <td>{quantity}</td>
                <td>{price * quantity}</td>
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
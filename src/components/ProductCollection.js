import React from 'react';
import PropTypes from 'prop-types';
import ProductThumb from './ProductThumb';
import styles from './styles/product-collection.module.css';

function ProductCollection ({
  productList,
  requestAddToCart,
  productClick,
}) {
  return (
    <div className={styles.productCollection}>
      {
        productList.map((product) => {
          return (
            <ProductThumb
              key={product.uuid}
              product={product}
              requestAddToCart={requestAddToCart}
            />
          )
        })
      }
    </div>
  )
}

ProductCollection.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string,
    price: PropTypes.number.isRequired,
  })).isRequired,
  requestAddToCart: PropTypes.func,
  productClick: PropTypes.func,
};

ProductCollection.defaultProps = {
  requestAddToCart: () => {},
  productClick: () => {},
}

export default ProductCollection;

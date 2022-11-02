import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles/product-thumb.module.css';

function ProductThumb ({
  product,
  requestAddToCart,
}) {
  const navigate = useNavigate();
  const { uuid, title, imagePath, price } = product;
  const addButton = useRef(null);

  const handleClick = (e) => {
    if (e.target === addButton.current) {
      requestAddToCart(product);
    } else {
      navigate(`/shop/${uuid}`);
    }
  };
  
  return (
    <div className={styles.product} onClick={handleClick}>
      <img src={imagePath} alt={`${title}`} />
      <h2>{title}</h2>
      <p>{`$${price}`}</p>
      <button type="button" ref={addButton}>Add to cart</button>
    </div>
  )
}

ProductThumb.propTypes = {
  product: PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string,
    price: PropTypes.number.isRequired,
  }),
  requestAddToCart: PropTypes.func,
  productClicked: PropTypes.func,
};

ProductThumb.defaultProps = {
  requestAddToCart: () => {},
  productClickedAction: () => {},
};

export default ProductThumb;

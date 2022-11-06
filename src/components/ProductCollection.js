import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductThumb from './ProductThumb';
import styles from './styles/product-collection.module.css';

const alphabetAscendingComparator = (item1, item2) => {
  const a = item1.title;
  const b = item2.title;
  if (a > b) return 1;
  if (a < b) return -1;
  if (a === b) return 0;
};
const alphabetDescendingComparator = (item1, item2) => {
  const a = item1.title;
  const b = item2.title;
  if (a < b) return 1;
  if (a > b) return -1;
  if (a === b) return 0;
};
const priceAscendingComparator = (item1, item2) => {
  const a = item1.price;
  const b = item2.price;
  if (a > b) return 1;
  if (a < b) return -1;
  if (a === b) return 0;
};
const priceDescendingComparator = (item1, item2) => {
  const a = item1.price;
  const b = item2.price;
  if (a < b) return 1;
  if (a > b) return -1;
  if (a === b) return 0;
};

const comparatorFunction = (mode) => {
  let sortFn;

  switch (mode) {
    case "alphabet-ascending":
      sortFn = alphabetAscendingComparator;
      break;
    case "alphabet-descending":
      sortFn = alphabetDescendingComparator;
      break;
    case "price-ascending":
      sortFn = priceAscendingComparator;
      break;
    case "price-descending":
      sortFn = priceDescendingComparator;
      break;
    default:
      sortFn = alphabetAscendingComparator;
      break;
  }

  return sortFn;
}

function ProductCollection ({
  productList,
  requestAddToCart,
}) {
  const [sortOrder, setSortOrder] = useState("");
  const [products, setProducts] = useState(productList);

  const sortProducts = (e) => {
    setSortOrder(e.target.value);
  };

  useEffect(() => {
    const newProducts = products.slice();

    newProducts.sort(comparatorFunction(sortOrder));
    setProducts(newProducts);
  }, [sortOrder]);
  
  return (
    <div>
      <div className={styles.options}>
        <label htmlFor="sort-order">Sort by:</label>
        <select id="sort-order" value={sortOrder} onChange={sortProducts}>
          <option value="alphabet-ascending">Alphabetical (A-z)</option>
          <option value="alphabet-descending">Alphabetical (Z-a)</option>
          <option value="price-ascending">Price (low-high)</option>
          <option value="price-descending">Price (high-low)</option>
        </select>
      </div>
      <div className={styles.productCollection}>
        {
          products.map((product) => {
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

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import productList from '../product-list.js';

async function loader({ params }) {
  const product = productList.find((product) => params.uuid === product.uuid);
  return product;
}

function ProductDetails(){
  const product = useLoaderData();

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  )
}

export default ProductDetails;
export { loader };
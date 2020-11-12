import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  let productId = props.product.id; // careful, the data structure could change and is still in construction
  let productName = propos.product.name;
  return (
    <div className="productCard">
      <Link to={`/${productId}`}> {productName}</Link>
    </div>
  );
};

export default ProductCard;

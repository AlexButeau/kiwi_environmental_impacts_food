import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const productId = product.id;
  // careful, the data structure could change and is still in construction
  const productName = product.name;
  return (
    <div className="productCard">
      <Link to={`/${productId}`}> {productName}</Link>
    </div>
  );
};

export default ProductCard;

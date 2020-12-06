import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const productId = product.id;
  const productName = product.name;
  const { imgUrl } = product;
  return (
    <div
      className="product-card"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="overlay">
        <Link to={`products/${productId}`}> {productName}</Link>
      </div>
    </div>
  );
};

export default ProductCard;

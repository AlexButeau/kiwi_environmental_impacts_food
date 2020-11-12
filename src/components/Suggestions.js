import React from 'react';
import ProductCard from './ProductCard';

const Suggestions = () => {
  const suggestions = []; //will be an array of objects, each object with at least product name and product id
  return (
    <div className="suggestions-wrapper">
      {suggestions.map((product) => {
        <ProductCard product={product} />;
      })}
    </div>
  );
};

export default Suggestions;

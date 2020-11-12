import React from 'react';
import ProductCard from './ProductCard';
import './styles/suggestions.scss';

const Suggestions = () => {
  const suggestions = [
    { name: 'Pizza margarita', id: 25404 },
    { name: 'Boeuf bourguinon', id: 25033 },
    { name: 'Lasagnes légumes-chèvre', id: 25219 },
    { name: 'Salade César', id: 25628 },
  ]; // will be an array of objects, each object with at least product name and product id
  return (
    <div className="suggestions-wrapper">
      {suggestions.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default Suggestions;

import React from 'react';
import ProductCard from './ProductCard';
import './styles/suggestions.scss';

const Suggestions = () => {
  const suggestions = [
    {
      name: 'Pizza margarita',
      id: 25404,
      imgUrl:
        'https://cdn.pixabay.com/photo/2015/10/17/20/22/margherita-pizza-993274_1280.jpg',
    },
    {
      name: 'Boeuf bourguignon',
      id: 25033,
      imgUrl:
        'https://cdn.pixabay.com/photo/2020/03/12/02/56/english-food-4923752_1280.jpg',
    },
    {
      name: 'Lasagnes légumes-chèvre',
      id: 25219,
      imgUrl:
        'https://cdn.pixabay.com/photo/2016/12/11/22/41/lasagna-1900529_1280.jpg',
    },
    {
      name: 'Salade César',
      id: 25628,
      imgUrl:
        'https://cdn.pixabay.com/photo/2014/01/17/08/56/caesar-246818_1280.jpg',
    },
  ]; // will be an array of objects, each object with at least product name and product id
  return (
    <div className="suggestions-wrapper">
      {suggestions.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Suggestions;

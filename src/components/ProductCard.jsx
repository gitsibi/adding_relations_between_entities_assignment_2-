import React from 'react';
import RatingWidget from '../RatingWidget.jsx';

function ProductCard({ product, onRatingSubmit }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>
        <strong>Average Rating: </strong>{product.avgRating} 
        <span> ({product.totalRatings} ratings)</span>
      </p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
}

export default ProductCard;

import React from 'react';
import ProductOptions from './ProductOptions';

const BuyBox = ({ 
  name, 
  reference, 
  stars, 
  rating, 
  price, 
  priceDiscount, 
  description,
  children 
}) => {
  return (
    <div className="buy-box">
      <h1 className="product-name">{name}</h1>
      <p className="product-reference">Ref: {reference}</p>
      
      <div className="rating-container">
        <div className="stars">
          <span className="star-count">{stars}</span>
          <img src="/assets/star-icon.svg" alt="Estrelas" className="star-icon" />
        </div>
        <span className="rating">{rating} avaliações</span>
      </div>

      <div className="price-container">
        {priceDiscount ? (
          <>
            <span className="original-price">R$ {price.toFixed(2)}</span>
            <span className="discount-price">R$ {priceDiscount.toFixed(2)}</span>
          </>
        ) : (
          <span className="price">R$ {price.toFixed(2)}</span>
        )}
      </div>

      <p className="product-description">{description}</p>

      {children}

      <button className="buy-button">COMPRAR</button>
    </div>
  );
};

export default BuyBox;

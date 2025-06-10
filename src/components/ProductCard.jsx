import React from 'react';

const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <div className="product-prices">
        {priceDiscount ? (
          <>
            <span className="original-price">R$ {price.toFixed(2)}</span>
            <span className="discount-price">R$ {priceDiscount.toFixed(2)}</span>
          </>
        ) : (
          <span className="price">R$ {price.toFixed(2)}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

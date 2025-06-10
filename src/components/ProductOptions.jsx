import React, { useState } from 'react';

const ProductOptions = ({ options, radius, shape, type }) => {
  const [selected, setSelected] = useState(0);

  const getStyle = (index) => {
    const baseStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      border: index === selected ? '2px solid #C92071' : '1px solid #CCCCCC'
    };

    if (shape === 'square') {
      return {
        ...baseStyle,
        width: '46px',
        height: '46px',
        borderRadius: radius || '0px'
      };
    } else {
      return {
        ...baseStyle,
        width: '31px',
        height: '31px',
        borderRadius: '50%'
      };
    }
  };

  return (
    <div className="product-options">
      {options.map((option, index) => (
        <div 
          key={index}
          style={getStyle(index)}
          onClick={() => setSelected(index)}
        >
          {type === 'color' ? (
            <div style={{
              backgroundColor: option,
              width: '100%',
              height: '100%',
              borderRadius: shape === 'circle' ? '50%' : radius || '0px'
            }} />
          ) : (
            <span style={{ fontSize: '24px', color: '#474747' }}>{option}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;

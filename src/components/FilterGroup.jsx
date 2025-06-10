import React from 'react';

const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div className="filter-group">
      <h3 className="filter-title">{title}</h3>
      <div className="filter-options">
        {options.map((option, index) => (
          <label key={index} className="filter-option">
            <input 
              type={inputType} 
              name={title.toLowerCase()} 
              value={option.value || option.text}
              className="filter-input"
            />
            <span>{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;

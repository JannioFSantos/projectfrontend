import React, { useState } from 'react';
import FilterGroup from '../components/FilterGroup';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

const ProductListingPage = () => {
  const [sortBy, setSortBy] = useState('');
  const [filters, setFilters] = useState({
    category: [],
    color: [],
    size: []
  });

  const products = [
    {
      name: "Tênis Esportivo",
      image: "/public/product-thumb-1.jpeg",
      price: 299.90,
      priceDiscount: 249.90
    },
    {
      name: "Camiseta Básica",
      image: "/public/product-thumb-2.jpeg", 
      price: 99.90
    },
    {
      name: "Calça Jeans",
      image: "/public/product-thumb-3.jpeg",
      price: 199.90
    }
  ];

  const categories = [
    { text: "Calçados", value: "shoes" },
    { text: "Roupas", value: "clothes" },
    { text: "Acessórios", value: "accessories" }
  ];

  const colors = [
    { text: "Preto", value: "black" },
    { text: "Branco", value: "white" },
    { text: "Azul", value: "blue" }
  ];

  const sizes = [
    { text: "P", value: "p" },
    { text: "M", value: "m" },
    { text: "G", value: "g" }
  ];

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    // Lógica para ordenar produtos
  };

  return (
    <div className="product-listing-page">
      <div className="filters-section">
        <div className="sort-filter">
          <label>Ordenar por</label>
          <select value={sortBy} onChange={handleSortChange}>
            <option value="">Selecione</option>
            <option value="price-asc">Menor preço</option>
            <option value="price-desc">Maior preço</option>
          </select>
        </div>

        <div className="filter-groups">
          <FilterGroup 
            title="Categorias"
            inputType="checkbox"
            options={categories}
          />
          
          <FilterGroup
            title="Cores"
            inputType="checkbox" 
            options={colors}
          />
          
          <FilterGroup
            title="Tamanhos"
            inputType="checkbox"
            options={sizes}
          />
        </div>
      </div>

      <div className="products-section">
        <Section
          title={`${products.length} produtos encontrados`}
          titleAlign="left"
        >
          <ProductListing products={products} />
        </Section>
      </div>
    </div>
  );
};

export default ProductListingPage;

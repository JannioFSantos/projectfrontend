import React from 'react';
import Gallery from '../components/Gallery';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

const HomePage = () => {
  const slides = [
    { src: "/public/home-slide-1.jpeg" },
    { src: "/public/home-slide-2.jpeg" },
    { src: "/public/home-slide-3.jpeg" }
  ];

  const featuredProducts = [
    {
      name: "Produto 1",
      image: "/public/product-thumb-1.jpeg",
      price: 199.90,
      priceDiscount: 149.90
    },
    {
      name: "Produto 2", 
      image: "/public/product-thumb-2.jpeg",
      price: 99.90
    }
  ];

  return (
    <div className="home-page">
      <Gallery 
        images={slides}
        width={1440}
        height={681}
      />
      
      <Section 
        title="Coleções em destaque"
        titleAlign="center"
      >
        <div className="collections">
          <img src="/public/collection-1.png" alt="Coleção 1" />
          <img src="/public/collection-2.png" alt="Coleção 2" />
          <img src="/public/collection-3.png" alt="Coleção 3" />
        </div>
      </Section>

      <Section 
        title="Produtos em alta"
        titleAlign="left"
      >
        <ProductListing products={featuredProducts} />
      </Section>
    </div>
  );
};

export default HomePage;

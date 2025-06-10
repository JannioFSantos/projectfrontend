import React from 'react';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import ProductOptions from '../components/ProductOptions';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

const ProductViewPage = () => {
  const productImages = [
    { src: "/public/produc-image-1.jpeg" },
    { src: "/public/produc-image-2.jpeg" },
    { src: "/public/produc-image-3.jpeg" },
    { src: "/public/produc-image-4.jpeg" },
    { src: "/public/produc-image-5.jpeg" }
  ];

  const recommendedProducts = [
    {
      name: "Tênis Esportivo",
      image: "/public/product-thumb-1.jpeg",
      price: 199.90,
      priceDiscount: 149.90
    },
    {
      name: "Camiseta Básica",
      image: "/public/product-thumb-2.jpeg",
      price: 99.90
    },
    {
      name: "Calça Jeans",
      image: "/public/product-thumb-3.jpeg",
      price: 159.90
    },
    {
      name: "Moletom",
      image: "/public/product-thumb-4.jpeg",
      price: 129.90,
      priceDiscount: 99.90
    }
  ];

  const sizes = ["39", "40", "41", "42"];
  const colors = ["#000000", "#1F1F1F", "#474747"];

  return (
    <div className="product-view-page">
      <div className="product-container">
        <Gallery 
          images={productImages}
          width={700}
          height={570}
          radius={4}
          showThumbs
        />
        
        <BuyBox
          name="Tênis Esportivo"
          reference="TS001"
          stars={4.8}
          rating={125}
          price={299.90}
          priceDiscount={249.90}
          description="Tênis esportivo com tecnologia de amortecimento para maior conforto durante suas atividades físicas."
        >
          <div className="options-section">
            <h3>Tamanhos</h3>
            <ProductOptions 
              options={sizes}
              shape="square"
              type="text"
            />
            
            <h3>Cores</h3>
            <ProductOptions 
              options={colors}
              shape="circle"
              type="color"
            />
          </div>
        </BuyBox>
      </div>

      <Section 
        title="Produtos recomendados"
        titleAlign="left"
        link={{ text: "Ver todos", href: "/products" }}
      >
        <ProductListing products={recommendedProducts} />
      </Section>
    </div>
  );
};

export default ProductViewPage;

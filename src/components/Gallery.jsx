import React, { useState } from 'react';

const Gallery = ({ images, width, height, radius, showThumbs, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`gallery ${className || ''}`} style={{ width, height }}>
      <img 
        src={images[currentIndex].src} 
        alt={`Slide ${currentIndex + 1}`}
        className="gallery-image"
        style={{ borderRadius: radius }}
      />
      
      <button 
        className="arrow-left" 
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        <img src="/assets/arrow-left.svg" alt="Anterior" />
      </button>
      
      <button 
        className="arrow-right" 
        onClick={nextSlide}
        disabled={currentIndex === images.length - 1}
      >
        <img src="/assets/arrow-right.svg" alt="Próximo" />
      </button>

      {showThumbs && (
        <div className="thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              style={{ borderRadius: radius }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;

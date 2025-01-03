import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './ImageSlideShow.css';

function ImageSlideShow({ images }) {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length, currentImageIndex]);

  return (
    <div className='image-slide-show-container'>
      <button 
        className='image-button-prev' 
        onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className='image-slide-show-container-inner'>
        <div className='images-container'>
          {images !== undefined && images.length > 0 && images.map((imageSrc, index) => {
            return (
              <img 
                className={`app-image  ${index === currentImageIndex ? 'active' : ''}`}
                src={imageSrc}
              />
            );
          })[currentImageIndex]}
        </div>
        <div className='image-dots'>
          {images !== undefined && images.length > 0 && images.map((image, index) => {
            return (
              <span
                key={index}
                className={`image-dot ${index === currentImageIndex ? 'active-dot' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            );
          })}
        </div>
      </div>
      <button 
        className='image-button-next'
        onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default ImageSlideShow;
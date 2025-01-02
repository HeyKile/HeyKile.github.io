import React, { useState, useEffect } from 'react';
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
      <div className='images-container'>
        {images !== undefined && images.length > 0 && images[currentImageIndex]}
      </div>
      <div className='image-dots'>
        {images !== undefined && images.length > 0 && images.map((image, index) => {
          return (
            <span
              key={index}
              className={`image-dot ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ImageSlideShow
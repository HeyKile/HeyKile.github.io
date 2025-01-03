import React, { useState, useEffect } from 'react';
import ImageSlideShow from './ImageSlideShow';
import './WebsiteHeader.css';

const getImages = () => {
  return [
    `${process.env.PUBLIC_URL}/assets/images/kyle_grad_solo.JPEG`,
    `${process.env.PUBLIC_URL}/assets/images/kyle_linkedin_pic.JPEG`,
    `${process.env.PUBLIC_URL}/assets/images/kyle_grad_parents.JPEG`,
    `${process.env.PUBLIC_URL}/assets/images/kyle_uhs_grad.JPEG`,
    `${process.env.PUBLIC_URL}/assets/images/kyle_bush.JPEG`,
    `${process.env.PUBLIC_URL}/assets/images/kyle_grad_sibs.JPEG`,
  ];
};

function WebsiteHeader() {

  const [isShrunk, setIsShrunk] = useState(false);
  const images = getImages();

  return (
    <header className="app-header">
      <div className='app-header-left-content'>
        <h1 className='app-header-name'>Kyle Bello</h1>
        <p className='app-header-intro-text'>Software Engineer | Pitt CS Alumn | Fitness Enjoyer</p>
      </div>
      <div className='app-header-right-content'>
        <ImageSlideShow images={images} />
      </div>
    </header>
  );
}

export default WebsiteHeader;

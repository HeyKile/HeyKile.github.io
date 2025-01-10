import React from 'react';
import ImageSlideShow from './ImageSlideShow';
import './WebsiteHeader.css';

const getImages = () => {
  return [
    `${process.env.PUBLIC_URL}/assets/images/kyle-images/kyle_grad_solo.JPEG`,
    `${process.env.PUBLIC_URL}/assets/images/kyle-images/kyle_linkedin_pic.JPEG`,
    `${process.env.PUBLIC_URL}/assets/images/kyle-images/kyle_grad_parents.JPEG`,
    `${process.env.PUBLIC_URL}/assets/images/kyle-images/kyle_uhs_grad.JPEG`,
    `${process.env.PUBLIC_URL}/assets/images/kyle-images/kyle_bush.JPEG`,
    `${process.env.PUBLIC_URL}/assets/images/kyle-images/kyle_grad_sibs.JPEG`,
  ];
};

const getBackgroundImages = () => {
  return [
    `${process.env.PUBLIC_URL}/assets/images/background-images/autumn.JPEG`,
    `${process.env.PUBLIC_URL}/assets/images/background-images/oakland_bridge.JPEG`,
    `${process.env.PUBLIC_URL}/assets/images/background-images/obx_dune.JPEG`,
    `${process.env.PUBLIC_URL}/assets/images/background-images/obx_pond.JPEG`,
    `${process.env.PUBLIC_URL}/assets/images/background-images/ocmd_winter.JPEG`,
    `${process.env.PUBLIC_URL}/assets/images/background-images/phoenix.JPEG`,
  ]
};

function WebsiteHeader() {

  const images = getImages();
  const backgroundImages = getBackgroundImages();
  const backgroundImageIndex = Math.floor(Math.random() * backgroundImages.length);

  return (
    <header 
      className="app-header"
      style={{ 
        backgroundImage: `url(${backgroundImages[backgroundImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='app-header-left-content transparent-gradient'>
        <h1 className='app-header-name'>Kyle Bello</h1>
        <p className='app-header-intro-text'> Software Engineer | Pitt CS Alumn | Cool Guy </p>
      </div>
      <div className='app-header-right-content'>
        {/* <ImageSlideShow images={images} /> */}
      </div>
    </header>
  );
}

export default WebsiteHeader;

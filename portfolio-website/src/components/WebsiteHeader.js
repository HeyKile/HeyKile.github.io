import React from 'react';
import config from '../config/personal-projects.json';
import AboutMe from './AboutMe';
import './WebsiteHeader.css';

// const getBackgroundImages = () => {
//   return [
//     `${process.env.PUBLIC_URL}/assets/images/background-images/autumn.JPEG`,
//     `${process.env.PUBLIC_URL}/assets/images/background-images/oakland_bridge.JPEG`,
//     `${process.env.PUBLIC_URL}/assets/images/background-images/obx_dune.JPEG`,
//     `${process.env.PUBLIC_URL}/assets/images/background-images/obx_pond.JPEG`,
//     `${process.env.PUBLIC_URL}/assets/images/background-images/ocmd_winter.JPEG`,
//     `${process.env.PUBLIC_URL}/assets/images/background-images/phoenix.JPEG`,
//   ]
// };

function WebsiteHeader() {
  // const backgroundImages = getBackgroundImages();
  // const backgroundImageIndex = Math.floor(Math.random() * backgroundImages.length);

  return (
    // <header 
    //   className="app-header"
    //   style={{ 
    //     backgroundImage: `url(${backgroundImages[backgroundImageIndex]})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //   }}
    // >
    //   <div className='app-header-left-content transparent-gradient'>
    //     <h1 className='app-header-name'>Kyle Bello</h1>
    //     <p className='app-header-intro-text'> Software Engineer | Pitt CS Alumn | Cool Guy </p>
    //   </div>
    //   <div className='app-header-right-content'>
    //     {/* <ImageSlideShow images={images} /> */}
    //   </div>
    // </header>
    <header className="app-header">
      <AboutMe aboutMe={config.aboutMe}/>
    </header>
  );
}

export default WebsiteHeader;

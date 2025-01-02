import React, { useState, useEffect } from 'react';
import ImageSlideShow from './ImageSlideShow';
import './WebsiteHeader.css';

function WebsiteHeader() {

  const [isShrunk, setIsShrunk] = useState(false);
  const images = getImages();

  return (
    <header className="app-header">
      <div className='app-header-left-content'>
        <h2 classname='app-header-name'>Kyle Bello</h2>
        <p className='app-header-intro-text'>Software Enthusiast | Pitt CS Alumn | Fitness Enjoyer</p>
      </div>
      <div classname='app-header-right-conent'>
        <ImageSlideShow images={images} />
      </div>
    </header>
  );
}

export default WebsiteHeader;

const getImages = () => {
  return [
    <img className='app-image' src={`${process.env.PUBLIC_URL}/assets/images/kyle_grad_solo.JPEG`} alt="Me in my cap and gown holding my diploma" />,
    <img className='app-image' src={`${process.env.PUBLIC_URL}/assets/images/kyle_linkedin_pic.JPEG`} alt="My linkedin photo" />,
    <img className='app-image' src={`${process.env.PUBLIC_URL}/assets/images/kyle_grad_parents.JPEG`} alt="Me in my cap and gown with my parents" />,
    <img className='app-image' src={`${process.env.PUBLIC_URL}/assets/images/kyle_uhs_grad.JPEG`} alt="Me with the other interns at my internship" />,
    <img className='app-image' src={`${process.env.PUBLIC_URL}/assets/images/kyle_bush.JPEG`} alt="Me squatting next to a bush" />,
    <img className='app-image' src={`${process.env.PUBLIC_URL}/assets/images/kyle_grad_sibs.JPEG`} alt="Me in my cap and gown with my siblings" />,
  ];
};
import React from 'react';
import config from '../config/config.json';
import AboutMe from './AboutMe';
import './WebsiteHeader.css';

function WebsiteHeader({ charsDisplayed, setCharsDisplayed, showContent }) {

  return (
    <header className="app-header">
      <AboutMe
        aboutMe={config.aboutMe}
        charsDisplayed={charsDisplayed}
        setCharsDisplayed={setCharsDisplayed}
        showContent={showContent}
      />
    </header>
  );
}

export default WebsiteHeader;

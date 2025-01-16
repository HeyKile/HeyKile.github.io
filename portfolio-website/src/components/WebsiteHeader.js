import React from 'react';
import AboutMe from './AboutMe';
import './WebsiteHeader.css';

function WebsiteHeader({ config, charsDisplayed, setCharsDisplayed, showContent }) {

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

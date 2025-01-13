import React, { useState, useEffect } from 'react';
import config from './config/personal-projects.json';
import './App.css';
import WebsiteHeader from './components/WebsiteHeader';
import WebsiteBody from './components/WebsiteBody';

function App() {
  
  const [charsDisplayed, setCharsDisplayed] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    console.log(charsDisplayed);
    if (config && config.aboutMe && charsDisplayed === config.aboutMe.name.length) {
      setShowContent(true);
    }
  }, [charsDisplayed]);

  return (
    <div className="App">
      <WebsiteHeader
        config={config}
        charsDisplayed={charsDisplayed}
        setCharsDisplayed={setCharsDisplayed}
        showContent={showContent}
      />
      {showContent === true &&
        <WebsiteBody
          config={config}
          showContent={showContent}
        />
      }
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import config from './config/config.json';
import './App.css';
import DetailPane from './components/DetailPane';
import WebsiteHeader from './components/WebsiteHeader';
import WebsiteBody from './components/WebsiteBody';

function App() {
  
  const [charsDisplayed, setCharsDisplayed] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [curProject, setCurProject] = useState(null);

  useEffect(() => {
    if (config && config.aboutMe && charsDisplayed === config.aboutMe.name.length) {
      setShowContent(true);
    }
  }, [charsDisplayed]);

  return (
    <div className={`App ${curProject !== null ? 'App--detail-open' : ''}`}>
      <DetailPane
        project={curProject} 
        setProject={setCurProject}
      />
      <div className='main-content'>
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
            setCurProject={setCurProject}
          />
        }
      </div>
    </div>
  );
}

export default App;

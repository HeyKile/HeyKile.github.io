import React from 'react';
import { useState } from 'react';
import './WebsiteBody.css';
import PersonalProjects from './PersonalProjects';
import AboutMe from './AboutMe';

function WebsiteBody({ config, showContent, setCurProject }) {

  const tabs = [
    // { label: 'About Me', content: <AboutMe aboutMe={config.aboutMe}/> },
    { label: 'Projects', content: <PersonalProjects projects={config.projects} setCurProject={setCurProject}/> },
    { label: 'Work Experience', content: <p>Under construction...</p> },
    { label: 'Contacts', content: <p>Under construction...</p> },
  ];

  const [tab, setTab] = useState(0);

  if (!showContent) {
    return;
  }

  return (
    <div
      className='website-body'
      style={{
        visibility: `${showContent ? 'visible' : 'hidden'}`,
        opacity: `${showContent ? '1' : '0'}`
      }}
    >
      <div className='website-body-buttons'>
        {tabs.map((curTab, index) => (
          <button
            key={index}
            className={`body-button${tab === index ? '--selected' : ''}`}
            onClick={() => setTab(index)}
          >
            {curTab.label}
          </button>
        ))}
      </div>
      <div className='website-body-content'>
        {tab >= 0 && tab < tabs.length && tabs[tab].content}
      </div>
    </div>
  );
}

export default WebsiteBody;
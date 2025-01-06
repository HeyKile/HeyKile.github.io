import React from 'react';
import { useState } from 'react';
import './WebsiteBody.css';
import config from './config/personal-projects.json';
import PersonalProjects from './PersonalProjects';

function WebsiteBody() {

  const tabButtons = [
    'About Me',
    'Projects',
    'Work Experience',
    'Contacts'
  ];

  const tabs = [
    <p>About me bro</p>,
    <PersonalProjects projects={config.projects} />,
    <p>Work bro</p>,
    <p>Contacts bro</p>
  ];

  const [tab, setTab] = useState(0);

  return (
    <div className='website-body'>
      <div className='website-body-buttons'>
        {tabButtons.map((label, index) => (
          <button
            key={index}
            className={`body-button${tab === index ? '--selected' : ''}`}
            onClick={() => setTab(index)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className='website-body-content'>
        {tab >= 0 && tab < tabs.length && tabs[tab]}
      </div>
    </div>
  );
}

export default WebsiteBody;
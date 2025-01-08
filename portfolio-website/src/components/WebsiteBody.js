import React from 'react';
import { useState } from 'react';
import './WebsiteBody.css';
import config from '../config/personal-projects.json';
import PersonalProjects from './PersonalProjects';

function WebsiteBody() {

  const tabs = [
    { label: 'About Me', content: <p>About me bro</p> },
    { label: 'Projects', content: <PersonalProjects projects={config.projects} /> },
    { label: 'Work Experience', content: <p>Work bro</p> },
    { label: 'Contacts', content: <p>Contacts bro</p> },
  ];

  const [tab, setTab] = useState(1);

  return (
    <div className='website-body'>
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
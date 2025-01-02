import React from 'react';
import { useState } from 'react';

function WebsiteBody() {

  const tabButtons = [
    'About Me',
    'Projects',
    'Work Experience'
  ];
  const tabs = [
    <p>About me bro</p>,
    <p>Projects bro</p>,
    <p>Work bro</p>
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
        {tab < tabs.length && tabs[tab]}
      </div>
    </div>
  );
}

export default WebsiteBody;
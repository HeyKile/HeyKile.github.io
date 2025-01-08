import React, { useState, useEffect } from 'react';
import ImageSlideShow from './ImageSlideShow';
import { toAssetUrl } from '../utils/utils';
import './DetailPane.css';

export default function DetailPane({ project, setProject }) {

  return (
    <div className={`detail-pane ${project !== null ? 'open' : 'close'}`}>
      <div className='detail-pane-content'>
        <div className='detail-pane-header'>
          {project !== null &&
            <div className='project-title-container'>
              <p className='project-title'>{project.name}: <text className='project-subtext'>{project.subtext}</text></p>
              <text className='project-technologies'>({project.technologies && project.technologies.join(" | ")})</text>
            </div>
          }
          <button className='detail-pane-close-button' onClick={() => setProject(null)}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className='detail-pane-body'>
          {project && <ImageSlideShow images={toAssetUrl(project.screenshotUrls)} />}
        </div>
      </div>
    </div>
  );
} 
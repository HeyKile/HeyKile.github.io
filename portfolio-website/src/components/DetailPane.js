import React, { useState, useEffect } from 'react';
import ImageSlideShow from './ImageSlideShow';
import { toAssetUrl } from '../utils/utils';
import './DetailPane.css';

export default function DetailPane({ project, setProject }) {

  const [descriptionText, setDescriptionText] = useState(undefined);

  useEffect(() => {
    setDescriptionText(undefined);
    if (project && project.descriptionFileName) {
      fetch(`${process.env.PUBLIC_URL}/assets/descriptions/${project.descriptionFileName}`)
        .then((response) => response.text())
        .then((text) => setDescriptionText(text))
        .catch((error) => console.error('Error fetching description:', error));
    }
  }, [project]);

  return (
    <div className={`detail-pane ${project !== null ? 'open' : 'close'}`}>
      <div className='detail-pane-content'>
        <div className='detail-pane-header'>
          {project !== null &&
            <div className='project-title-container'>
              <p 
                className='detail-pane-project-title'
                style={{
                  color: `${project.primaryColor ? project.primaryColor : ''}`
                }}
              >
                {project.name}: <a className='detail-pane-project-subtext'>{project.subtext}</a>
              </p>
              {project.contributors && project.contributors.length > 0 &&
                <p className='project-contributors'>By: {project.contributors.map((contributor, index) => {
                  return (
                    <span key={index}>
                      <a
                        className='contributor-link'
                        href={contributor.githubLink}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {contributor.name}
                      </a>{index === project.contributors.length - 1 ? '' : ', '}
                    </span>
                  );
                })}</p>
              }
            </div>
          }
          <button className='detail-pane-close-button' onClick={() => setProject(null)}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <div className='detail-pane-body'>
          <div className='detail-pane-image-container'>
            {project !== null && project.screenshotUrls && project.screenshotUrls.length > 0 &&
              <ImageSlideShow images={toAssetUrl(project.screenshotUrls)} />
            }
          </div>
          {project &&
            <div className='detail-pane-project-description-container'>
              {project.technologies && project.technologies.length > 0 &&
                <p className='detail-pane-project-description-header'>Technologies</p>
              }
              {project.technologies && project.technologies.length > 0 &&
                <a className='detail-pane-project-description-text'>{project.technologies.join(", ")}</a>
              }
              {descriptionText &&
                <p className='detail-pane-project-description-header'>Description</p>
              }
              {descriptionText &&
                <div className='detail-pane-description-text-container'>
                  {descriptionText.split('\n').map((text, index) => {
                    return <p key={index} className='detail-pane-project-description-text'>{text}</p>
                  })}
                </div>
              }
            </div>
          }
        </div>
        {project && project.repoUrl &&
          <a
            className='detail-pane-repo-link'
            href={project.repoUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h4 className='detail-pane-repo-label'>View Repository</h4>
            <i className="fas fa-arrow-right detail-pane-repo-link-icon"></i>
          </a>
        }
      </div>
    </div>
  );
} 
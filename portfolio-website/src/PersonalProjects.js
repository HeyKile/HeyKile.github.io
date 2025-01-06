import React, { useState, useEffect } from 'react';
import './PersonalProjects.css';

function PersonalProjects({ projects }) {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [curProject, setCurProject] = useState(null);
  
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='personal-projects-container'>
      <div className='personal-projects-info'>
        <h2 className='personal-projects-title'>Personal Projects</h2>
        <p className='personal-projects-subtext'>Here is a list of personal projects I've completed over the last few years. Click on each to learn more. Enjoy!</p>
      </div>
      <div className='project-cards-container'>
        {
          projects !== undefined && projects.length > 0
            ? projects.map((project, index) => {
                return (
                  <button
                    key={index}
                    className='project-card'
                    onClick={() => setCurProject(project)}
                  >
                    <div className='project-card-content'>
                      <div className='project-card-text'>
                        <p className='project-card-name'>{project.name}</p>
                        <p className='project-card-subtext'>{project.subtext}</p>
                        <p className='project-card-technologies'>
                          {project.technologies && project.technologies.join(" | ")}
                        </p>
                        {/* <div className='project-card-contributors-container'>
                          {project.contributors && project.contributors.map((contributor, index) => {
                            return (
                              <>
                                <a
                                  key={index}
                                  className='contributor-link'
                                  href={contributor.githubLink}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                >
                                  {contributor.name}
                                </a>{index === project.contributors.length - 1 ? '' : ', '}
                              </>
                            );
                          })}
                        </div> */}
                      </div>
                      {project.thumbnailUrl && 
                        <div className='project-thumbnail-container'>
                          <img
                            className='project-thumbnail'
                            src={`${process.env.PUBLIC_URL}/assets/images/${project.thumbnailUrl}`}
                          />
                        </div>
                      }
                    </div>
                  </button>
                );
              })
            : <p>No personal projects! Unfortunate and not true...</p>
        }
      </div>
      <p>Screen width: {screenWidth}</p>
    </div>
  );
}

export default PersonalProjects;
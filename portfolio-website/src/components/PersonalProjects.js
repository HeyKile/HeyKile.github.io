import React, { useState, useEffect } from 'react';
import './PersonalProjects.css';
import DetailPane from './DetailPane';

function PersonalProjects({ projects, setCurProject }) {

  const [hoveredProject, setHoveredProject] = useState(null);
  // const [curProject, setCurProject] = useState(null);

  return (
    <div className='personal-projects-container'>
      {/* <DetailPane
        project={curProject} 
        setProject={setCurProject}
      /> */}
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
                    onMouseEnter={() => setHoveredProject(project)}
                    onMouseLeave={() => setHoveredProject(null)}
                    style={{
                      backgroundImage: hoveredProject === project 
                        ? `url(${process.env.PUBLIC_URL}/assets/images/${project.thumbnailUrl})`
                        : 'none',
                      backgroundSize: '95%',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundBlendMode: 'overlay',
                    }}
                  >
                    <div className='project-card-text'>
                      <p 
                        className='project-card-name'
                        style={{
                          color: `${project.primaryColor ? project.primaryColor : '#6093ff'}`
                        }}
                      >{project.name}</p>
                      <p className='project-card-subtext'>{project.subtext}</p>
                    </div>
                    {/* <div className='project-card-content'>
                      {project.thumbnailUrl && 
                        <div className='project-thumbnail-container'>
                          <img
                            className='project-thumbnail'
                            src={`${process.env.PUBLIC_URL}/assets/images/${project.thumbnailUrl}`}
                          />
                        </div>
                      }
                    </div> */}
                  </button>
                );
              })
            : <p>No personal projects! Unfortunate and not true...</p> // should never happen lol
        }
      </div>
    </div>
  );
}

export default PersonalProjects;
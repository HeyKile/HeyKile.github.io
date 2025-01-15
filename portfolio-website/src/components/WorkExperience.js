import React, { useEffect } from "react";
import './WorkExperience.css';

export default function WorkExperience({ workExperience }) {

  useEffect(() => {
    if (workExperience && workExperience.jobs && workExperience.jobs.length > 0) {
      workExperience.jobs.forEach((job) => {
        fetch(`${process.env.PUBLIC_URL}/assets/documents/${job.descriptionFileName}`)
          .then((fileResponse) => fileResponse.text())
          .then((text) => job.descriptionText = text)
          .catch((error) => console.error('Error fetching job description', error));
      });
    }
  }, [workExperience]);

  return (
    <div className="work-experience-container">
      <div className="work-experience-info">
        {workExperience && workExperience.title &&
          <h2 className='work-experience-title'>{workExperience.title}</h2>
        }
      </div>
      <div className="work-experience-content">
        {workExperience && workExperience.jobs.map((job) => {
          return (
            <div className="work-experience-card">
              {job.role && job.companyName &&
                <div>
                  <h3 className="work-experience-company-name">{job.role}</h3>
                  <h5>{job.companyName}</h5>
                </div>
              }
            </div>
          );
        })}
      </div>
    </div>
  );
}

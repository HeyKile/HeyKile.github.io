import React, { useState, useEffect } from "react";
import './WorkExperience.css';

export default function WorkExperience({ workExperience }) {

  const [isLoadingDescriptions, setIsLoadingDescriptions] = useState(true);

  const workExperienceValid = (workExperience) => {
    return workExperience
      && workExperience.jobs
      && workExperience.jobs.length > 0;
  };

  useEffect(() => {
    if (workExperience && workExperience.jobs && workExperience.jobs.length > 0) {
      setIsLoadingDescriptions(true);
      Promise.all(workExperience.jobs.map((job) => 
        fetch(`${process.env.PUBLIC_URL}/assets/documents/${job.descriptionFileName}`)
          .then((response) => response.text())
          .then((text) => {
            if (text.includes('<!DOCTYPE html>')) {
              job.descriptionText = "";
              console.error(`Could not find job description file for ${job.role} - ${job.companyName}`);
            }
            else {
              job.descriptionText = text;
            }
          })
          .catch((error) => {
            throw Error(`Error fetching job description for ${job.role} - ${job.companyName}`, error)
          })
      ))
        .catch((error) => console.error(error))
        .finally(() => setIsLoadingDescriptions(false));
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
        {workExperienceValid(workExperience) && workExperience.jobs.map((job, index) => {
          return (
            <div className="work-experience-card" key={index}>
              {job &&
                <div className="work-experience-card-header">
                  <div className="work-exerpience-card-header-names">
                    {job.role &&
                      <span className="work-experience-job-role">{job.role}</span>
                    }
                    {job.companyName && 
                      <span className="work-experience-company-name">{job.companyName}</span>
                    }
                  </div>
                  <div className="work-exerpience-card-header-dates">
                    {job.startDate && job.endDate &&
                      <span className="work-experience-job-dates">{job.startDate} - {job.endDate}</span>
                    }
                  </div>
                  {/* <div className="work-exerpience-card-header-top">
                    {job.role &&
                      <span className="work-experience-job-role">{job.role}</span>
                    }
                    {job.startDate && job.endDate &&
                      <span className="work-experience-job-dates">{job.startDate} - {job.endDate}</span>
                    }
                  </div>
                  <div className="work-exerpience-card-header-bottom">
                    {job.companyName && 
                      <span className="work-experience-company-name">{job.companyName}</span>
                    }
                  </div> */}
                </div>
              }
              {!isLoadingDescriptions && job && job.descriptionText && job.descriptionText.length > 0 &&
                <div className="work-experience-card-body">
                  <ul className="work-experience-job-description-bullet-list">
                    {job.descriptionText.split('\n').map((text, index) => {
                      return (
                        <li key={index} className='work-experience-job-list-item'>
                          <span className='work-experience-job-description-text'>{text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              }
            </div>
          );
        })}
      </div>
    </div>
  );
}

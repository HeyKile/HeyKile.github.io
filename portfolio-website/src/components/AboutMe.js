import React, { useEffect, useState } from "react";
import './AboutMe.css';

export default function AboutMe({ aboutMe }) {

  const [description, setDescription] = useState(undefined);

  useEffect(() => {
    if (aboutMe && aboutMe.fileName) {
      fetch(`${process.env.PUBLIC_URL}/assets/documents/${aboutMe.fileName}`)
        .then((response) => response.text())
        .then((text) => setDescription(text))
        .catch((error) => console.error('Error fetching description:', error));
    }
  }, [aboutMe]);

  return (
    <div className="about-me-container">
      <div className="about-me-information-container">
        {aboutMe.name !== undefined &&
          <h2>Hey! my name is
            <p className='about-me-name'>{aboutMe.name}</p>
          </h2>
        }
        {description !== undefined && 
          <p>{description}</p>
        }
      </div>
    </div>
  );
}

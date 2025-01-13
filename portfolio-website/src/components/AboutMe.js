import React, { useEffect, useState } from "react";
import './AboutMe.css';

export default function AboutMe({ aboutMe }) {

  const [description, setDescription] = useState(undefined);
  const [name, setName] = useState("");
  const [charsDisplayed, setCharsDisplayed] = useState(0);

  useEffect(() => {
    if (aboutMe && aboutMe.descriptionFilename) {
      fetch(`${process.env.PUBLIC_URL}/assets/documents/${aboutMe.descriptionFilename}`)
        .then((response) => response.text())
        .then((text) => setDescription(text))
        .catch((error) => console.error('Error fetching description:', error));
    }
  }, [aboutMe]);

  useEffect(() => {
    if (aboutMe && aboutMe.name) {
      const interval = setInterval(() => {
        setCharsDisplayed(prevCharsDisplayed => {
          if (prevCharsDisplayed < aboutMe.name.length) {
            return prevCharsDisplayed + 1;
          }
          else {
            clearInterval(interval);
            return prevCharsDisplayed;
          }
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [aboutMe]);
  
  useEffect(() => {
    if (aboutMe && aboutMe.name) {
      setName(aboutMe.name.slice(0, charsDisplayed));
      const interval = setInterval(() => {
        setName(prevName => 
          prevName.endsWith('_') ? prevName.slice(0, -1) : prevName + '_'
        );
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [charsDisplayed, aboutMe]);

  return (
    <div className="about-me-container">
      <div className="about-me-information-container">
        {aboutMe.name !== undefined &&
          <div className="about-me-header">
            <p className="about-me-pretext">Hey! my name is</p>
            <p className={`about-me-name ${name.endsWith('_') ? '' : 'add-space'}`}>
              {name}
            </p>
          </div>
        }
      </div>
      <div className='about-me-description-container'>
        {aboutMe && aboutMe.pictureFilename &&
          <img
            className="about-me-photo"
            src={`${process.env.PUBLIC_URL}/assets/images/${aboutMe.pictureFilename}`}
          />
        }
        {description !== undefined && 
          <p className="about-me-description">{description}</p>
        }
      </div>
    </div>
  );
}

import React, { useState } from "react";
import './Contacts.css';

export default function Contacts({ contacts }) {

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (emailAdr) => {
    try {
      await navigator.clipboard.writeText(emailAdr);
      setIsCopied(true);
    }
    catch (error) {
      console.error('failed to copy to clipboard', error);
    }
  };

  return (
    <div className='contacts-container'>
      <div className="contacts-container-content">
        {contacts && contacts.contactText &&
          <h2 className='contact-header-text'>{contacts.contactText}</h2>
        }
        {contacts && contacts.email && contacts.emailIcon && contacts.copyIconUncopied && contacts.copyIconCopied &&
          <div className='email-container'>
            <button
              className='email-info'
              onClick={() => copyToClipboard(contacts.email)}
            >
              <i className={`${contacts.emailIcon} email-icon`} />
              <span className="email-text">{contacts.email}</span>
              <i className={`${isCopied ? contacts.copyIconCopied : contacts.copyIconUncopied} email-icon`} />
            </button>
          </div>
        }
        {contacts && contacts.socialsText && 
          <h4 className='contact-header-text'>{contacts.socialsText}</h4>
        }
        <div className='social-links-container'>
          {contacts && contacts.socialLinks && contacts.socialLinks.length > 0 && contacts.socialLinks.map((contact, index) => {
            return (
              <a
                className="social-content-container"
                key={index}
                href={contact.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className={`${contact.iconName}`}/>
                <p className="social-name">{contact.name}</p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
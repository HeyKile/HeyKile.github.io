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
      {contacts && contacts.contactText &&
        <p className='contact-header-text'>{contacts.contactText}</p>
      }
      {contacts && contacts.email && contacts.emailIcon &&
        <div className='email-container'>
          <div className='email-container-content'>
            <i className={contacts.emailIcon} />
            <button
              className='email-text'
              onClick={() => copyToClipboard(contacts.email)}
            >
              {contacts.email}
              {contacts.copyIconUncopied && contacts.copyIconCopied &&
                <i className={isCopied ? contacts.copyIconCopied : contacts.copyIconUncopied} />
              }
            </button>
          </div>
        </div>
      }
      {contacts && contacts.socialsText && 
        <p className='contact-header-text'>{contacts.socialsText}</p>
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
  );
}
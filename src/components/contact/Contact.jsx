import React from 'react';
import styles from './contact.module.css';
import { getImageUrl } from '../../utils';

const Contact = () => {
  return (
    <section id='contact' className={styles.container}>
      {/* title */}
      <h4 className={styles.title}>Contact</h4>
      <p>Feel free to reach out!</p>
      <div className={styles.content}>
        {[
          { name: 'email', link: 'hazarathali78@gmail.com' },
          { name: 'github', link: '' },
          { name: 'linkedin', link: '' },
        ].map((social) => (
          <a
            key={social.name}
            href={social.link || '#'}
            target={social.link ? '_blank' : '_self'}
            rel='noopener noreferrer'
            onClick={(e) => {
              if (!social.link) {
                e.preventDefault(); // Prevent navigation if link is missing
                console.log(`${social.name} link is missing.`);
              }
            }}
          >
            <img
              className={styles.socialImg}
              src={getImageUrl(`contact/${social.name}Icon.png`)}
              alt={`${social.name} Icon`}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;

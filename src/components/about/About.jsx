import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './about.module.css';

const About = () => {
  const aboutMe = [
    {
      header: 'Frontend Developer',
      desc: 'I’m a front-end developer with experience in building responsive and optimized sites',
      imgSrc: 'about/cursorIcon.png',
    },
  ];
  return (
    <section className={styles.container} id='about'>
      <h4 className={styles.title}>About</h4>
      <div className={styles.content}>
        {/* image */}
        <img
          className={styles.aboutImg}
          src={getImageUrl('about/developer.png')}
          alt='about'
        />
        <div className={styles.aboutItems}>
          {aboutMe.map((item, index) => (
            <div key={index} className={styles.aboutItem}>
              <img src={getImageUrl(item.imgSrc)} alt={item.imgSrc} />
              <div>
                <h5 className={styles.header}>{item.header}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

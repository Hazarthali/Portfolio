import React from 'react';
import styles from './hero.module.css';
import { getImageUrl } from '../../utils';
const Hero = () => {
  return (
    <section className={styles.container}>
      {/* user summary */}
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, i'm Hazarath ali</h1>
        <p className={styles.description}>
          I'm FrontEnd Developer with 4 years experience using React,
          Javascript, HTML, CSS, Material-UI
        </p>
        <a className={styles.contactBtn} href='mailto:myemail@gmail.com'>
          Contact Me
        </a>
        {/* <button className={styles.contactBtn}>Contact Me</button> */}
      </div>
      {/* profile or hero image */}
      <div>
        <img
          className={styles.heroImg}
          src={getImageUrl('hero/heroImage.png')}
          alt='hero'
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;

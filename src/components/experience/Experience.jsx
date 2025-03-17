import React from 'react';
import styles from './experience.module.css';
import skills from '../../data/skills.json';
import experiences from '../../data/history.json';
import { getImageUrl } from '../../utils';

const Experience = () => {
  return (
    <section id='experience' className={styles.container}>
      <h4 className={styles.title}>Experience</h4>

      {/* content */}
      <div className={styles.content}>
        {/* skills */}
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <img
                className={styles.skillImg}
                src={getImageUrl(skill.imageSrc)}
                alt={skill.imageSrc}
              />
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        {/* experience */}
        <div className={styles.experiences}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.expe}>
              <img src={getImageUrl(exp.imageSrc)} alt={exp.organisation} />
              <div>
                <h4>{`${exp.role}, ${exp.organisation}`}</h4>
                <p>{`${exp.startDate} - ${exp.endDate}`}</p>
                <ul>
                  {exp.experiences.map((roles, index) => (
                    <li key={index}>{roles}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

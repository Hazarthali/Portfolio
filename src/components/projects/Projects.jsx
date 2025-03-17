import React from 'react';
import styles from './projects.module.css';
import projects from '../../data/projects.json';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id='projects' className={styles.projectContainer}>
      <h4 className={styles.title}>Projects</h4>
      <div className={styles.content}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

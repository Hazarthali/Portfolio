import { getImageUrl } from '../../utils';
import styles from './projectcard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.cardContainer}>
      {/* project img */}
      <img
        className={styles.projectImg}
        src={getImageUrl(project.imageSrc)}
        alt={project.imgSrc}
      />
      {/* project title */}
      <p className={styles.projectTitle}>{project.title}</p>
      {/* project description */}
      <p className={styles.description}>{project.description}</p>
      {/* skills */}
      <div className={styles.skills}>
        {project?.skills?.map((skill, index) => (
          <p key={index} className={styles.skill}>
            {skill}
          </p>
        ))}
      </div>

      {/* action buttons */}
      {project?.demo && (
        <div className={styles.actionBtns}>
          {[
            { label: 'Demo', link: project.demo },
            // { label: 'Source', link: project.source },
          ].map((item) => (
            <a href={item?.link} key={item?.label} target='_blank'>
              {item?.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;

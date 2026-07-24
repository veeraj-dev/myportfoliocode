import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpandedView = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      {!isExpanded ? (
        <div className={styles.container}>
          <div
            className={styles.imageContainer}
            onClick={toggleExpandedView}
            role="button"
            tabIndex={0}
          >
            <img
              src={getImageUrl(imageSrc)}
              alt={`Image of ${title}`}
              className={styles.image}
            />
          </div>
          <h3 className={styles.title}>{title}</h3>
          <ul className={styles.skills}>
            {skills.map((skill, id) => (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.expandedContainer}>
          <button onClick={toggleExpandedView} className={styles.closeButton}>
            &times;
          </button>
          <img
              src={getImageUrl(imageSrc)}
              alt={`Image of ${title}`}
              className={styles.image}
            />
          <h3 className={styles.expandedTitle}>{title}</h3>
          <p className={styles.expandedDescription}>{description}</p>
          <ul className={styles.skills}>
            {skills.map((skill, id) => (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            ))}
          </ul>
          <div className={styles.links}>
          {source && source.length > 0 && (
            <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
              View Report
            </a>
          )}
            {demo && demo.length > 0 && (
              <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};

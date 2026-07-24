import React from "react";
import styles from "./Experience.module.css"; // Ensure this CSS module exists
import skills from "../../data/skills.json"; // The JSON data containing the skills
import { getImageUrl } from "../../utils"; // Utility to resolve image URLs

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        {/* Frontend Skills Section */}
        <div className={`${styles.skillSection} ${styles.hoverEffect}`}>
          <h3 className={styles.sectionTitle}>Frontend Skills</h3>
          <div className={styles.skills}>
            {skills
              .filter(skill => skill.category === "frontend")
              .map((skill, id) => {
                const imageUrl = getImageUrl(skill.imageSrc); // Resolves the image URL
                return (
                  <div key={id} className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                      <img src={imageUrl} alt={skill.title} />
                    </div>
                    <p>{skill.title}</p>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Backend Skills Section */}
        <div className={`${styles.skillSection} ${styles.hoverEffect}`}>
          <h3 className={styles.sectionTitle}>Backend Skills</h3>
          <div className={styles.skills}>
            {skills
              .filter(skill => skill.category === "backend")
              .map((skill, id) => {
                const imageUrl = getImageUrl(skill.imageSrc); // Resolves the image URL
                return (
                  <div key={id} className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                      <img src={imageUrl} alt={skill.title} />
                    </div>
                    <p>{skill.title}</p>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Database Skills Section */}
        <div className={`${styles.skillSection} ${styles.hoverEffect}`}>
          <h3 className={styles.sectionTitle}>Database Skills</h3>
          <div className={styles.skills}>
            {skills
              .filter(skill => skill.category === "database")
              .map((skill, id) => {
                const imageUrl = getImageUrl(skill.imageSrc); // Resolves the image URL
                return (
                  <div key={id} className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                      <img src={imageUrl} alt={skill.title} />
                    </div>
                    <p>{skill.title}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

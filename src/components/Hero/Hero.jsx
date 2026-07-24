import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Veeraj Swamy</h1>
        <p className={styles.description}>
        Recent Computer Science graduate with expertise in Java, Python, and web technologies. Developed innovative solutions using various technologies. Eager to contribute to forward-thinking organizations and grow professionally in software development</p>
        <div className={styles.buttons}>
          <a
            href="https://drive.google.com/file/d/11x0XZ8FuKlDRKNjcN1Ca-qPsOzykeFy3/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
          >
           Check Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

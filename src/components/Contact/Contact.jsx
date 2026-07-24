import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out to me for any questions or opportunities!</p>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img 
              src={getImageUrl("contact/emailIcon.png")} 
              alt="Email icon" 
              className={styles.linkIcon} 
            />
            <a href="mailto:veeraj.swamy.s123@gmail.com">
              veeraj.swamy.s123@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <a 
              href="https://www.linkedin.com/in/veeraj123/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.linkAnchor}
            >
              <img 
                src={getImageUrl("contact/linkedinIcon.png")} 
                alt="LinkedIn icon" 
                className={styles.linkIcon} 
              />
              LinkedIn Profile
            </a>
          </li>
          <li className={styles.link}>
            <a 
              href="https://github.com/veeraj-dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.linkAnchor}
            >
              <img 
                src={getImageUrl("contact/githubIcon.png")} 
                alt="GitHub icon" 
                className={styles.linkIcon} 
              />
              GitHub Profile
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

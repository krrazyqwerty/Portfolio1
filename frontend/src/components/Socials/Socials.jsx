import React from "react";
import styles from "./Socials.module.css";

import emailIcon from "../../assets/socials/emailIcon.png";
import linkedinIcon from "../../assets/socials/linkedinIcon.png";
import githubIcon from "../../assets/socials/githubIcon.png";
import whatsapp from "../../assets/socials/whatsapp.png";
import viber from "../../assets/socials/viber.png";
import telegram from "../../assets/socials/Telegram.png";

export const Socials = () => {
  return (
    <footer id="socials" className={styles.container}>
      <div className={styles.text}>
        <p>Feel free to reach out!</p>
        <div className={styles.socialIcon}>
          <img
            src={whatsapp}
            alt="whatsapp icon"
            className={styles.socialIcon}
          />

          <img src={viber} 
          alt="viber icon" 
          className={styles.socialIcon} />

          <img
            src={telegram}
            alt="telegram icon"
            className={styles.socialIcon}
          />
        </div>
        <h3>Number : 9843068769</h3>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" className={styles.icon} />
          <a target="_blank" rel="noopener noreferrer" href="mailto:19m89saroj@gmail.com">19m89saroj@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img src={linkedinIcon} alt="LinkedIn icon" className={styles.icon} />
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/saroj-maharjan-a51236190/">
            linkedin.com/in/saroj-maharjan
          </a>
        </li>

        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" className={styles.icon} />
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/krrazyqwerty">github.com/krrazyqwerty</a>
        </li>
      </ul>
    </footer>
  );
};

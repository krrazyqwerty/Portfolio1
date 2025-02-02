import React from "react";
import styles from "./Contact.module.css";

// Manually import the icons
import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <p>Feel free to reach out!</p>
        <h3>Phone Number : 9843068769</h3>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:19m89saroj@gmail.com">19m89saroj@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/saroj-maharjan-a51236190/">linkedin.com/in/saroj-maharjan</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/krrazyqwerty">github.com/krrazyqwerty</a>
        </li>
      </ul>
    </footer>
  );
};

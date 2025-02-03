import React, { useEffect, useState } from "react";
import styles from "./About.module.css";

import picture1 from "../../assets/about/picture1.jpeg";
import Up from "../../assets/about/Up.png";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.container} id="about">
      <h1>About Me</h1>
      <div className={styles.content}>
        <img
          src={picture1}
          alt="picture"
          className={styles.aboutImage}
        />
            <div className={styles.aboutItemText}>
              <h2>I am a dedicated and versatile Full Stack Developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including <span>React</span>, <span>Node.js,</span> and <span>MongoDB</span>. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.</h2>
            </div>
      </div>

      {isVisible && (
        <a href="#" className={styles.scrollToHeroBtn}>
          <img src={Up} alt="up arrow" />
        </a>
      )}
    </section>
  );
};

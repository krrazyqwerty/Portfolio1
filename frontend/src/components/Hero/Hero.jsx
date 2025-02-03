import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";

import profileImage from "../../assets/hero/Profile.gif"; 


export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Saroj Maharjan</h1>
        <h3 >Full Stack Developer</h3>
        <p className={styles.description}>
          I have just started my journey as a Junior Full-stack developer, eager to learn and grow in this exciting field. I am committed to building efficient and scalable web applications.
        </p>
      
      </div>

      {!isLoaded && <div className={styles.loadingSpinner}>Loading...</div>}
      <img
        src={profileImage}
        alt="Profile Image"
        className={styles.heroImg}
        onLoad={handleImageLoad} 
        style={{ display: isLoaded ? 'block' : 'none' }} 
      />
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

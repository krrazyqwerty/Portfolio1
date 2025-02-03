import React from 'react';
import skills from "../../data/skills.json";
import styles from "./Skills.module.css";

import { getImageUrl } from "../../utils";

const Skills = () => {
  return (
    <div className={styles.content}>

    <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
        })}
        </div>
        </div>
  )
}

export default Skills

import React from "react";
import { Experience } from "../Experience/Experience";
import Skills from "../Skills/Skills";
import styles from "./ExperienceAndSkills.module.css";

export const ExperienceAndSkills = () => {
    return (
        <section className={styles.container}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <Skills />
                </div>
                <div className={styles.column}>
                    <Experience />
                </div>
            </div>
        </section>
    );
}; 

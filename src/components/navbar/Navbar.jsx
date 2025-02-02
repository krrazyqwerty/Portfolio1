import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuIcon = "/assets/nav/menuIcon.png";
  const closeIcon = "/assets/nav/closeIcon.png";
  const logo = "/assets/nav/Logos.svg";

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        <img src={logo} alt="Logo" className={styles.logo}/>
      </a>

      <div className={styles.menu}>
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <img
            src={menuOpen ? closeIcon : menuIcon}
            alt={menuOpen ? "Close menu" : "Open menu"}
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "#000", 
              borderRadius: "50%",
              padding: "5px",
            }}
          />
        </button>

        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

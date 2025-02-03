import React, { useState } from "react";
import styles from "./Navbar.module.css";
import menuIcon from "../../assets/nav/menuIcon.png";
import closeIcon from "../../assets/nav/closeIcon.png";
import logos from "../../assets/nav/Logos.svg";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

   return (
    <nav className={styles.navbar}>
      <img src={logos} alt="logo icon" className={styles.logo} />

      <div className={styles.menu}>
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}>
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
          onClick={() => setMenuOpen(false)}>
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

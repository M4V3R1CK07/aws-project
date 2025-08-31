import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.navbar}>
      <a href="/" className={styles.title}>
        AWS Hosting Project
      </a>

      <button
        className={styles.menuBtn}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <nav className={styles.menu}>
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
        >
          <li>
            <a href="#overview" onClick={closeMenu}>
              Overview
            </a>
          </li>
          <li>
            <a href="#architecture" onClick={closeMenu}>
              Architecture
            </a>
          </li>
          <li>
            <a href="#team" onClick={closeMenu}>
              Team
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

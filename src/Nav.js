import React, { useState } from 'react';
import styles from './Nav.module.css';

export default function Nav({headerProps}) {
  
  const navLinks = ["About Me", "CV", "Commerce", "Projects", "Makers", "Watch Me TDD", "Blog"];
  const [navOpen, setNavOpen] = useState(false);
  const [navClass, setNavClass] = useState(`${styles.navBar}`);

  const handleNavOpen = () => {
    console.log(navOpen);
    if (!navOpen) {
      setNavClass(`${styles.navBar} ${styles.navOpen}`);
    } else {
      setNavClass(`${styles.navBar}`);
    }
    setNavOpen(!navOpen);
  }

  return (
    <div>
      <button className={styles.navOpenButton} onClick={handleNavOpen}>
        {navOpen ? "CLOSE" : "OPEN"}
      </button>
      <div className={navClass}>
        {console.log(navClass)}
        {navLinks.map((item) => (
          
          <div className={styles.navLinks}>
            <a href={`/${item}`}>{item}</a> 
          </div>
        ))}
      </div>
    </div>
  )
}


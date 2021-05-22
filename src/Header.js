import React from 'react';
import styles from './Header.module.css';
import Nav from './Nav'

export default function Header() {

  return(
    <div>
      <Nav/>
      <div className={styles.mainHeader}>
          BENJAMAKER
      </div>
    </div>
  )
}

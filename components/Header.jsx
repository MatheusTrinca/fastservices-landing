import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* Circle */}
        <div className={styles.circle}>
          <div className={styles.outerCircle}>
            <div className={styles.innerCircle}></div>
          </div>
        </div>
      </div>
      <div className={styles.headerFooter}>HeaderFooter</div>
    </div>
  );
};

export default Header;

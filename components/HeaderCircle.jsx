import React from 'react';
import styles from '../styles/HeaderCircle.module.css';

const HeaderCircle = () => {
  return (
    <div className={styles.circle}>
      <div className={styles.outerCircle}>
        <div className={styles.innerCircle}></div>
      </div>
    </div>
  );
};

export default HeaderCircle;

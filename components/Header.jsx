import React from 'react';
import styles from '../styles/Header.module.css';
import HeaderCircle from './HeaderCircle';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* Circle */}
        <HeaderCircle />
        <div className={styles.rectangles}>
          <div className={styles.rectangle}>1</div>
          <div className={styles.rectangle}>2</div>
          <div className={styles.rectangle}>3</div>
          <div className={styles.rectangle}>4</div>
          <div className={styles.rectangle}>5</div>
          <div className={styles.rectangle}>6</div>
          <div className={styles.rectangle}>7</div>
        </div>
      </div>
      <div className={styles.headerFooter}>Header Footer</div>
    </div>
  );
};

export default Header;

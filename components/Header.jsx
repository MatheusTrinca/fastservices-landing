import React from 'react';
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import HeaderCircle from './HeaderCircle';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <HeaderCircle />
        <div className={styles.rectangles}>
          <div className={styles.rectangle} />
          <div className={styles.rectangle} />
          <div className={styles.rectangle} />
          <div className={styles.rectangle} />
          <div className={styles.rectangle} />
          <div className={styles.rectangle} />
          <div className={styles.rectangle} />
        </div>
      </div>
      <div className={styles.headerFooter}>
        <div className={styles.arrowDown}>
          <div className={styles.iconContainer}>
            <Image
              src="/img/arrowDown.png"
              alt="mostrar lojas"
              width="20px"
              height="25px"
              layout="fixed"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

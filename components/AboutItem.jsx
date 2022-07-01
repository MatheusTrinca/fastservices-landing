import Image from 'next/image';
import React from 'react';
import styles from '../styles/AboutItem.module.css';

const AboutItem = ({ direction, imageSrc, title, description }) => {
  return (
    <div
      className={styles.container}
      style={direction && { flexDirection: direction }}
    >
      <div className={styles.imageContainer}>
        <div className={styles.rectangle}></div>
        <div className={styles.image}>
          <Image
            src={imageSrc}
            className={styles.aboutImage}
            alt="phone"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <div className={styles.detailContainer}>
        <h2 className={styles.detailTitle}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default AboutItem;

import Image from 'next/image';
import React from 'react';
import styles from '../styles/AboutService.module.css';

// oddie whatsapp

const AboutService = ({ imageSrc, title, description }) => {
  return (
    <div className={styles.container}>
      <Image
        src={imageSrc}
        alt={title}
        width="200px"
        height="200px"
        objectFit="contain"
        layout="fixed"
      />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default AboutService;

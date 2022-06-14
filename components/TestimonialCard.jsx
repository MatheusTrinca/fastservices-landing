import Image from 'next/image';
import React from 'react';
import styles from '../styles/TestimonialCard.module.css';

const TestimonialCard = ({ text, name, service, image }) => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>{text}</p>
      <div className={styles.info}>
        <div className={styles.image}>
          <Image src={image} alt="imagem pessoa" width="100%" height="100%" />
        </div>
        <div className={styles.person}>
          <p className={styles.personName}>{name}</p>
          <p className={styles.personService}>{service}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

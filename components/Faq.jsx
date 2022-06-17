import React from 'react';
import styles from '../styles/Faq.module.css';
import Question from './Question';
import Title from './Title';

export const Faq = () => {
  return (
    <div className={styles.container}>
      <Title text="FAQ's" />
      <Question />
      <Question />
      <Question />
    </div>
  );
};

import React from 'react';
import styles from '../styles/Faq.module.css';
import Question from './Question';
import Title from './Title';

export const Faq = ({ questions }) => {
  return (
    <div className={styles.container} id="faq">
      <Title text="FAQ's" />
      {questions.map(question => (
        <Question key={question.id} {...question} />
      ))}
    </div>
  );
};

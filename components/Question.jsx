import React from 'react';
import styles from '../styles/Question.module.css';

const Question = ({ question, answerTitle, answerDescription }) => {
  const [openAnswer, setOpenAnswer] = React.useState(false);

  return (
    <div className={styles.container}>
      {/* Question */}
      <div
        className={styles.questionContainer}
        onClick={() => setOpenAnswer(!openAnswer)}
      >
        <div className={styles.crossIcon}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
        <p className={styles.text}>{question}</p>
      </div>
      {/* Answer */}
      {openAnswer && (
        <div className={styles.answerContainer}>
          <div className={styles.lineIcon} onClick={() => setOpenAnswer(false)}>
            <span className={styles.minusLine}></span>
          </div>
          <div className={styles.answer}>
            <p className={styles.answerTitle}>{answerTitle}</p>
            <p className={styles.answerDescription}>{answerDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;

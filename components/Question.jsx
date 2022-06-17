import React from 'react';
import styles from '../styles/Question.module.css';

const Question = () => {
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
        <p className={styles.text}>Chamber reached do he nothing be?</p>
      </div>
      {/* Answer */}
      {openAnswer && (
        <div className={styles.answerContainer}>
          <div className={styles.lineIcon} onClick={() => setOpenAnswer(false)}>
            <span className={styles.minusLine}></span>
          </div>
          <div className={styles.answer}>
            <p className={styles.answerTitle}>Stuff sight equal of my woody?</p>
            <p className={styles.answerDescription}>
              Our asked sex point her she seems. New plenty she horses parish
              design you. Stuff sight equal of my woody. Him children bringing
              goodness suitable she entirely put far daughter.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;

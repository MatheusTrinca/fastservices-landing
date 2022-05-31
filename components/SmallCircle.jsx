import React from 'react';
import styles from '../styles/SmallCircle.module.css';

const SmallCircle = ({ innerColor, top, borderColor, width, height }) => {
  return (
    <div
      className={styles.smallCircle}
      style={{
        backgroundColor: innerColor,
        top,
        borderColor,
        opacity: 1,
        width,
        height,
      }}
    ></div>
  );
};

export default SmallCircle;

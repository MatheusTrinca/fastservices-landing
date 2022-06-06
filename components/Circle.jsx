import React from 'react';
import styles from '../styles/Circle.module.css';

const HeaderCircle = ({ position, innerColor, outerColor }) => {
  return (
    <div className={styles.circle} style={{ ...position }}>
      <div
        className={styles.outerCircle}
        style={{ backgroundColor: outerColor }}
      >
        <div
          className={styles.innerCircle}
          style={{ backgroundColor: innerColor }}
        ></div>
      </div>
    </div>
  );
};

export default HeaderCircle;

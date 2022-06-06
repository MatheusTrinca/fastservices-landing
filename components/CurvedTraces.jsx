import Image from 'next/image';
import React from 'react';
import styles from '../styles/CurvedTraces.module.css';

const CurvedTraces = ({ position }) => {
  return <div className={styles.container} style={{ ...position }}></div>;
};

export default CurvedTraces;

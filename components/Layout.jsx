import React from 'react';
import styles from '../styles/Layout.module.css';
import HeaderCircle from './HeaderCircle';
import Image from 'next/image';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
      {/* 
      Colocar como backgound-Image no CSS
      <Image
        className={styles.curvelinesUp}
        src="/img/curveLines.png"
        width="50vw"
        height="100vh"
        alt="button lines"
        layout="fill"
        objectFit="cover"
      /> */}
    </div>
  );
};

export default Layout;

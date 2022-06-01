import Image from 'next/image';
import React from 'react';
import styles from '../styles/Layout.module.css';
import HeaderCircle from './HeaderCircle';

const Layout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/DownloadApp.module.css';

const DownloadApp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2 className={styles.title}>Download App</h2>
        <p className={styles.description}>
          Wisdom new and valley answer. Contented it so is discourse recommend.
          Man its upon him call mile. An pasture he himself believe ferrars
          besides cottage.
        </p>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <Link href="https://www.google.com">
              <Image
                src="/img/googleDownloadButton.png"
                alt="google playstore button"
                width="300px"
                height="220px"
                objectFit="contain"
                layout="intrinsic"
              />
            </Link>
          </div>
          <div className={styles.button}>
            <Link href="https://www.apple.com">
              <Image
                src="/img/appleDownloadButton.png"
                alt="apple store button"
                width="300px"
                height="220px"
                objectFit="contain"
                layout="intrinsic"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.phoneImage}>
        <Image
          src="/img/phoneImage.png"
          width="400px"
          height="680px"
          alt="Phone Image"
        />
      </div>
    </div>
  );
};

export default DownloadApp;

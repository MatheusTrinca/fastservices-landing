import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <Link href="#header">
              <a>
                <Image
                  src="/img/logo.png"
                  width="280px"
                  height="140px"
                  alt="Fast Service"
                  className={styles.logo}
                />
              </a>
            </Link>
          </div>
          <div className={styles.linksContainer}>
            <h2>Sobre o Fast Service</h2>
            <ul>
              <li>
                <Link href="#">Trabalhe conosco</Link>
              </li>
              <li>
                <Link href="#faq">Dúvidas frequentes</Link>
              </li>
              <li>
                <Link href="#">Cidades atendidas</Link>
              </li>
              <li>
                <Link href="#">Quero ser parceiro</Link>
              </li>
            </ul>
          </div>
          <div className={styles.downloadContainer}>
            <h2>Já baixou o aplicativo?</h2>
            <div className={styles.downloadButtonContainer}>
              <div className={styles.donwloadButton}>
                <Link href="https://www.google.com">
                  <a>
                    <Image
                      src="/img/googleDownloadButton.png"
                      alt="Google Play Store"
                      width="300px"
                      height="220px"
                    />
                  </a>
                </Link>
              </div>
              <div className={styles.downloadButton}>
                <Link href="https://www.apple.com">
                  <a>
                    <Image
                      src="/img/appleDownloadButton.png"
                      alt="Apple App Store"
                      width="300px"
                      height="220px"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrightContainer}>
        <p>
          Copyright © {new Date().getFullYear()} todos os direitos reservados
          FastService
        </p>
      </div>
    </>
  );
};

export default Footer;

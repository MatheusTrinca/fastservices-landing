import React from 'react';
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Circle from './Circle';
import SmallCircle from './SmallCircle';
import CurvedTraces from './CurvedTraces';

const Header = () => {
  return (
    <div className={styles.container} id="header">
      <div className={styles.heroImage}>
        <Image
          src="/img/heroImage.png"
          alt="banner"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.header}>
        <Circle
          position={{ top: '-150px', right: '-150px' }}
          outerColor="#fff"
          innerColor="#3e3b47"
        />
        <nav className={styles.navbar}>
          <ul className={styles.items}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#about">Sobre</Link>
            </li>
            <li>
              <Link href="#subscribe">Contato</Link>
            </li>
            <li>
              <Link href="#testimonials">Depoimentos</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.bannerText}>
          <h1>Fast Service</h1>
        </div>
        <p className={styles.bannerDescription}>
          Conectando quem precisa com quem sabe fazer. Fale o que precisa,
          receba até 4 orçamentos, escolha o melhor.
        </p>
        <div className={styles.mediaSocialIcons}>
          <ul>
            <li className={styles.socialIcon}>
              <Link href="https://www.facebook.com">
                <Image
                  src="/img/facebookIcon.png"
                  alt="facebook"
                  width="17px"
                  height="17px"
                  layout="fixed"
                  objectFit="contain"
                />
              </Link>
            </li>
            <li className={styles.socialIcon}>
              <Link href="https://www.instagram.com">
                <Image
                  src="/img/instagramIcon.png"
                  alt="instagram"
                  width="17px"
                  height="17px"
                  layout="fixed"
                  objectFit="contain"
                />
              </Link>
            </li>
            <li className={styles.socialIcon}>
              <Link href="https://www.whatsapp.com">
                <Image
                  src="/img/whatsappIcon.png"
                  alt="whatsapp"
                  width="17px"
                  height="17px"
                  layout="fixed"
                  objectFit="contain"
                />
              </Link>
            </li>
            <li className={styles.socialIcon}>
              <Link href="https://www.linkedin.com">
                <Image
                  src="/img/linkedinIcon.png"
                  alt="linkedin"
                  width="17px"
                  height="17px"
                  layout="fixed"
                  objectFit="contain"
                />
              </Link>
            </li>
          </ul>
        </div>

        {/* Rectangles and Small Circles */}
        <div className={styles.rectangles}>
          <div className={styles.rectangle}>
            <SmallCircle top="300px" innerColor="#FCA311" borderColor="#fff" />
          </div>
          <div className={styles.rectangle} />
          <div className={styles.rectangle} />
          <div className={styles.rectangle} />
          <div className={styles.rectangle}>
            <SmallCircle
              top="360px"
              innerColor="#FCA311"
              borderColor="#fff"
              width="16px"
              height="16px"
            />
          </div>
          <div className={styles.rectangle}>
            <SmallCircle
              top="112px"
              innerColor="#FCA311"
              borderColor="#3e3b47"
            />
          </div>
          <div className={styles.rectangle} />
        </div>
      </div>

      {/* Header Footer */}
      <div className={styles.headerFooter} id="headerFooter">
        <div className={styles.footerRow}>
          <div className={styles.arrowDown}>
            <Link href="#headerFooter">
              <div className={styles.iconContainer}>
                <Image
                  src="/img/arrowDown.png"
                  alt="mostrar lojas"
                  width="20px"
                  height="25px"
                  layout="fixed"
                  objectFit="contain"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.downloadButtons}>
            <div className={styles.downloadButton}>
              <Link href="https://www.google.com">
                <Image
                  src="/img/googleDownloadButton.png"
                  alt="google playstore button"
                  width="350px"
                  height="250px"
                  objectFit="contain"
                  layout="intrinsic"
                />
              </Link>
            </div>
            <div className={styles.downloadButton}>
              <Link href="https://www.apple.com">
                <Image
                  src="/img/appleDownloadButton.png"
                  alt="apple store button"
                  width="350px"
                  height="250px"
                  objectFit="contain"
                  layout="intrinsic"
                />
              </Link>
            </div>
          </div>
        </div>
        <CurvedTraces position={{ bottom: '-900px', right: '80px' }} />
        <Circle
          position={{ bottom: '-165px', left: '-165px' }}
          outerColor="#1e3c72"
          innerColor="#fff"
        />
      </div>
    </div>
  );
};

export default Header;

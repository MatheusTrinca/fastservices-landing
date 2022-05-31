import React from 'react';
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import HeaderCircle from './HeaderCircle';
import SmallCircle from './SmallCircle';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroImage}>
        <Image
          src="/img/heroImage.png"
          alt="banner"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.header}>
        <HeaderCircle />
        <nav className={styles.navbar}>
          <ul className={styles.leftItems}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
          </ul>
          <h1 className={styles.title}>fastServices</h1>
          <ul className={styles.rightItems}>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
            <li>
              <Link href="/depoimentos">Depoimentos</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.bannerText}>
          <h1>Fast Services</h1>
        </div>
        <p className={styles.bannerDescription}>
          Conectando quem precisa com quem sabe fazer. Fale o que precisa,
          receba até 4 orçamentos, escolha o melhor.
        </p>

        {/* Rectangles and Small Circles */}
        <div className={styles.rectangles}>
          <div className={styles.rectangle}>
            <SmallCircle top="300px" innerColor="#1E3C72" borderColor="#fff" />
          </div>
          <div className={styles.rectangle} />
          <div className={styles.rectangle} />
          <div className={styles.rectangle} />
          <div className={styles.rectangle}>
            <SmallCircle
              top="360px"
              innerColor="#3aa043"
              borderColor="#fff"
              width="16px"
              height="16px"
            />
          </div>
          <div className={styles.rectangle}>
            <SmallCircle top="112px" innerColor="#fff" borderColor="#1E3C72" />
          </div>
          <div className={styles.rectangle} />
        </div>
      </div>
      <div className={styles.headerFooter}>
        <div className={styles.arrowDown}>
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
        </div>
      </div>
    </div>
  );
};

export default Header;

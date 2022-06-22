import React from 'react';
import styles from '../styles/Subscribe.module.css';

const Subscribe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Cadastre-se e fique atualizado</h2>
          <p className={styles.text}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque .
          </p>
        </div>
        <div className={styles.inputContainer}>
          <form>
            <input type="email" placeholder="Digite seu email..." />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

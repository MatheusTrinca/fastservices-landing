import React from 'react';
import styles from '../styles/Subscribe.module.css';
import Circle from './Circle';

const Subscribe = () => {
  return (
    <div className={styles.container} id="subscribe">
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
        <Circle
          position={{ bottom: '-165px', right: '30px' }}
          outerColor="#fff"
          innerColor="#313131"
        />
      </div>
    </div>
  );
};

export default Subscribe;

import React from 'react';
import styles from '../styles/Subscribe.module.css';
import Circle from './Circle';

const Subscribe = () => {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleEmailSubmit = e => {
    e.preventDefault();
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    // Send Email
    if (emailRegex.test(email)) {
      // Enviar email
    } else {
      setError(true);
      setEmail('Digite um email válido');
    }
  };

  const handleOnFocus = () => {
    if (error) {
      setError(false);
      setEmail('');
    }
  };

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
          <form onSubmit={handleEmailSubmit}>
            <input
              style={
                error
                  ? {
                      borderWidth: '1px',
                      borderColor: 'red',
                      borderStyle: 'solid',
                      color: 'red',
                    }
                  : {}
              }
              type="email"
              placeholder="Digite seu email..."
              onChange={e => setEmail(e.target.value)}
              value={email}
              onFocus={handleOnFocus}
            />
            <button type="submit" disabled={error}>
              Enviar
            </button>
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

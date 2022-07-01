import React from 'react';
import styles from '../styles/Subscribe.module.css';
import Circle from './Circle';
import toast from 'react-hot-toast';
import { sendContactEmail } from '../services/sendMail';

const Subscribe = () => {
  const [email, setEmail] = React.useState('');

  const handlelSubmit = async e => {
    e.preventDefault();
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    if (!emailRegex.test(email)) {
      toast('Informe um email válido', {
        style: {
          background: 'red',
          color: '#fff',
        },
      });
      return;
    }
    try {
      await sendContactEmail(
        'Prestador',
        email,
        `Temos um possível interessado <br> email: ${email}`
      );
      setEmail('');
      toast('Email enviado com sucesso. Aguarde nosso contato!', {
        style: {
          background: 'green',
          color: '#fff',
        },
      });
    } catch (error) {
      toast('Ocorreu um erro ao tentar enviar sua mensage. Tente novamente!', {
        style: {
          background: 'red',
          color: '#fff',
        },
      });
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
          <form onSubmit={handlelSubmit}>
            <input
              type="email"
              placeholder="Digite seu email..."
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
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

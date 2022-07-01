import React from 'react';
import styles from '../styles/Subscribe.module.css';
import Circle from './Circle';
import toast from 'react-hot-toast';
import { sendContactEmail } from '../services/sendMail';
import TelefoneBrasileiroInput from 'react-telefone-brasileiro';

const Subscribe = () => {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
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
    if (!name || !phone) {
      toast('Complete seus dados', {
        style: {
          background: 'red',
          color: '#fff',
        },
      });
      return;
    }
    try {
      await sendContactEmail(
        name,
        email,
        `Temos um possível interessado <br> nome: ${name} <br> telefone: ${phone} <br> email: ${email}`
      );
      setName('');
      setEmail('');
      setPhone('');
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

        {/* Form */}
        <form onSubmit={handlelSubmit} className={styles.form}>
          <div className={styles.formRow}>
            <input
              className={styles.input}
              type="text"
              placeholder="Digite seu nome..."
              onChange={e => setName(e.target.value)}
              value={name}
            />
            <input
              className={styles.input}
              type="email"
              placeholder="Digite seu email..."
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className={styles.formRow}>
            <TelefoneBrasileiroInput
              className={styles.input}
              placeholder="Telefone ou whatsapp..."
              onChange={e => setPhone(e.target.value)}
              value={phone}
              temDDD
              separaDDD
            />
            <button className={styles.submitButton} type="submit">
              Enviar
            </button>
          </div>
        </form>

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

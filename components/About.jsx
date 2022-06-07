import React from 'react';
import styles from '../styles/About.module.css';
import AboutItem from './AboutItem';
import Title from './Title';

const About = ({ services }) => {
  return (
    <div className={styles.container}>
      <Title text="Sobre Nós" />
      {services.map(service => (
        <AboutItem
          key={service.id}
          imageSrc={service.image}
          title={service.title}
          direction={service.direction ? service.direction : null}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default About;

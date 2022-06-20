import React from 'react';
import styles from '../styles/About.module.css';
import AboutItem from './AboutItem';
import AboutService from './AboutService';
import Title from './Title';

const About = ({ services, aboutServices }) => {
  return (
    <div className={styles.container} id="about">
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
      <div className={styles.aboutServices}>
        {aboutServices.map(aboutService => (
          <AboutService
            key={aboutService.id}
            title={aboutService.title}
            imageSrc={aboutService.image}
            description={aboutService.description}
          />
        ))}
      </div>
    </div>
  );
};

export default About;

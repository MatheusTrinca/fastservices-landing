import Image from 'next/image';
import React from 'react';
import styles from '../styles/Testimonials.module.css';
import TestimonialCard from './TestimonialCard';
import Title from './Title';
import CurvedTraces from './CurvedTraces';
import Circle from './Circle';

const Testimonials = ({ testimonials }) => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container} id="testimonials">
        <Title text="Depoimentos" />
        <p className={styles.subtitle}>
          FastService é a nova plataforma de contratação de serviços de Marília.
          Conectamos Profissionais com pessoas solicitando serviço, atendendo
          com qualidade, facilidade e rapidez todos os tipos de necessidade.
        </p>
        <div className={styles.testimonials}>
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
        <div className={styles.sliderNav}>
          <Image
            src="/img/sliderNav.png"
            alt="imagem pessoa"
            width="115px"
            height="18px"
          />
        </div>
        <CurvedTraces position={{ bottom: '-1200px', right: '20px' }} />
      </div>
      <Circle
        position={{ bottom: '-165px', left: '-165px' }}
        outerColor="#fca311"
        innerColor="#fff"
      />
    </div>
  );
};

export default Testimonials;

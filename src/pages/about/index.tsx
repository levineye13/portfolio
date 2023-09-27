import React, { FC, ReactElement } from 'react';

import Printer from '../../components/printer';
import ButtonScroll from '../../components/button-scroll';
import styles from './index.module.scss';

const About: FC = (): ReactElement => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>
        Hi, my name is <span className={styles.name}>Oleg</span>
      </h1>
      <p className={styles.subtitle}>
        a frontend <Printer ms={500}>developer</Printer>
      </p>
      <p className={styles.description}>
        with passion for learning and creating.
      </p>
      <div className={styles.square} />
      <div className={styles.square} />
      <div className={styles.square} />
      <div className={styles.square} />
      <div className={styles.square} />
      <ButtonScroll>To projects</ButtonScroll>
    </section>
  );
};

export default About;

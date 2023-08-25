import React, { ReactElement } from 'react';

import styles from './index.module.scss';

const About = (): ReactElement => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>
        Hi, my name is <span className={styles.name}>Oleg</span>
      </h1>
      <p className={styles.subtitle}>a frontend developer</p>
      <p className={styles.description}>
        with passion for learning and creating.
      </p>
      <div className={styles.square} />
      <div className={styles.square} />
      <div className={styles.square} />
      <div className={styles.square} />
      <div className={styles.square} />
    </section>
  );
};

export default About;

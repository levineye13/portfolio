import React, { FC, ReactElement } from 'react';

import Title from '../../components/section-title';
import styles from './index.module.scss';

const Contacts: FC = (): ReactElement => {
  return (
    <section className={styles.section}>
      <Title>Contacts</Title>
      <p className={styles.subtitle}>Location</p>
      <p className={styles.info}>Moscow, Russia</p>
      <p className={styles.subtitle}>Telegram / WhatsApp</p>
      <p className={`${styles.info} ${styles.tel}`}>+7 (999) 982-31-27</p>
      <p className={styles.subtitle}>Email</p>
      <p className={`${styles.info} ${styles.email}`}>levineye@gmail.com</p>
    </section>
  );
};

export default Contacts;

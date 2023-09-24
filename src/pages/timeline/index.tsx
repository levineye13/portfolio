import React, { FC, ReactElement } from 'react';

import Title from '../../components/section-title';
import TimelineList from '../../components/timeline';
import styles from './index.module.scss';

const Timeline: FC = (): ReactElement => {
  return (
    <section className={styles.section}>
      <Title className={styles.title}>Timeline</Title>
      <TimelineList />
    </section>
  );
};

export default Timeline;

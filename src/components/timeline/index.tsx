import React, { FC, ReactElement } from 'react';

import Card from '../timeline-card';
import { timeline } from '../../core/data/timeline';
import styles from './index.module.scss';

const Timeline: FC = (): ReactElement => {
  return (
    <ul className={styles.timeline}>
      {timeline.map((event, index) => (
        <li className={styles.item} key={index}>
          <Card {...event} style={styles.card} />
        </li>
      ))}
    </ul>
  );
};

export default Timeline;

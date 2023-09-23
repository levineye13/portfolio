import React, { FC, ReactElement } from 'react';

import { timeline } from '../../core/data/timeline';
import styles from './index.module.scss';

const Timeline: FC = (): ReactElement => {
  return (
    <div className={styles.timeline}>
      {timeline.map((event) => (
        <div className={styles.event}>
          <span className={styles.date}>{event.year}</span>
          <div className={styles.line}>
            <div className={styles.circle} />
          </div>
          <p className={styles.description}>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

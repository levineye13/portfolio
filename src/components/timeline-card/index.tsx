import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface ITimelineCard {
  readonly year: number | string;
  readonly description: string;
  readonly duration?: string;
  readonly style?: string;
}

const TimelineCard: FC<ITimelineCard> = ({
  year,
  description,
  duration,
  style,
}): ReactElement => {
  return (
    <div className={`${styles.card} ${style}`}>
      <h3 className={styles.year}>{year}</h3>
      <p className={styles.description}>{description}</p>
      {duration && <p className={styles.description}>{duration}</p>}
    </div>
  );
};

export default TimelineCard;

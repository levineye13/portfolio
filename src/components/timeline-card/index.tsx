import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface ITimelineCard {
  readonly year: number | string;
  readonly description: string;
  readonly style?: string; //: React.CSSProperties;
}

const TimelineCard: FC<ITimelineCard> = ({
  year,
  description,
  style,
}): ReactElement => {
  return (
    <div className={`${styles.card} ${style}`}>
      <h3 className={styles.year}>{year}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default TimelineCard;

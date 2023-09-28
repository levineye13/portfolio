import React, { FC, ReactElement } from 'react';

import Printer from '../printer';
import styles from './index.module.scss';

const Loader: FC = (): ReactElement => {
  return (
    <div className={styles.div}>
      Loading<Printer ms={700}>...</Printer>
    </div>
  );
};

export default Loader;

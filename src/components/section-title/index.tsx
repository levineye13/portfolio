import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface ISectionTitle {
  readonly children: string;
}

const SectionTitle: FC<ISectionTitle> = ({ children }): ReactElement => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default SectionTitle;

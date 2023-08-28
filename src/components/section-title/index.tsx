import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface ISectionTitle {
  readonly children: string;
  readonly className?: string;
}

const SectionTitle: FC<ISectionTitle> = ({
  children,
  className,
}): ReactElement => {
  return <h2 className={`${styles.title} ${className}`}>{children}</h2>;
};

export default SectionTitle;

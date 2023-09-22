import React, { FC, ReactElement } from 'react';

import Menu from '../menu';
import styles from './index.module.scss';

const Header: FC = (): ReactElement => {
  return (
    <header className={styles.header}>
      <p className={styles.description}>Portfolio</p>
      <Menu />
    </header>
  );
};

export default Header;

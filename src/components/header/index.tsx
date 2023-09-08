import React, { FC, ReactElement } from 'react';

import BurgerButton from '../burger-button';
import styles from './index.module.scss';

const Header: FC = (): ReactElement => {
  return (
    <header className={styles.header}>
      <p className={styles.description}>Portfolio</p>
      <BurgerButton />
    </header>
  );
};

export default Header;

import React, { FC, ReactElement } from 'react';

import { useAppDispatch, useAppSelector } from '../../core/store/hooks';
import { toggle } from '../../core/store/menuSlice';
import styles from './index.module.scss';

interface IBurgerButton {
  readonly active?: boolean;
}

const BurgerButton: FC<IBurgerButton> = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { active } = useAppSelector((state) => state.menu);

  const handleClick = () => {
    dispatch(toggle());
  };

  return (
    <button
      className={`${styles.button} ${active ? styles.button_active : ''}`}
      type="button"
      onClick={handleClick}
    >
      <span className={styles.span} />
    </button>
  );
};

export default BurgerButton;

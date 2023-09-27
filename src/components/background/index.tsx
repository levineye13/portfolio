import React, { FC, ReactElement, MouseEvent } from 'react';

import styles from './index.module.scss';
import { useAppDispatch } from '../../core/store/hooks';
import { close } from '../../core/store/menuSlice';

interface IBackground {
  readonly children?: ReactElement;
  readonly isActive?: boolean;
}

const Background: FC<IBackground> = ({ children, isActive }): ReactElement => {
  const dispatch = useAppDispatch();

  const handleBackgroundClick = (e: MouseEvent<HTMLDivElement>): void => {
    dispatch(close());
  };

  return (
    <div
      className={`${styles.div} ${isActive ? styles.active : ''}`}
      onClick={handleBackgroundClick}
    >
      {children}
    </div>
  );
};

export default Background;

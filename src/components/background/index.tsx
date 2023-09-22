import React, { FC, ReactElement, MouseEvent } from 'react';

import styles from './index.module.scss';
import { useAppDispatch } from '../../core/store/hooks';
import { close } from '../../core/store/menuSlice';

interface IBackground {
  readonly children?: ReactElement;
}

const Background: FC<IBackground> = ({ children }): ReactElement => {
  const dispatch = useAppDispatch();

  const handleBackgroundClick = (e: MouseEvent<HTMLDivElement>): void => {
    dispatch(close());
  };

  return (
    <div className={styles.div} onClick={handleBackgroundClick}>
      {children}
    </div>
  );
};

export default Background;

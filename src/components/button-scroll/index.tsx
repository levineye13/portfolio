import React, { FC, ReactElement, useEffect, useRef } from 'react';

import styles from './index.module.scss';

interface IButton {
  readonly children: string;
}

const ButtonScroll: FC<IButton> = ({ children }): ReactElement => {
  const buttonElement = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonElement.current) {
      const parentElement = buttonElement.current.parentElement;

      if (parentElement) {
        const nextElement = parentElement.nextElementSibling;

        if (nextElement) {
          buttonElement.current.addEventListener('click', () => {
            nextElement.scrollIntoView({
              behavior: 'smooth',
            });
          });
        }
      }
    }
  }, []);

  return (
    <button type="button" className={styles.button} ref={buttonElement}>
      {children}
    </button>
  );
};

export default ButtonScroll;

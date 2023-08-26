import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';

import styles from './index.module.scss';

interface IPrinter {
  readonly children: string;
}

const Printer: FC<IPrinter> = ({ children }): ReactElement => {
  const [printText, setPrintText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout>();

  const add = (): void => {
    setPrintText((currentText) => currentText + children[index]);
    setIndex((currentIndex) => currentIndex + 1);
  };

  const drop = (): void => {
    setPrintText(() => '');
    setIndex(() => 0);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (children.length === index) {
        drop();
      } else {
        add();
      }
    }, 800);

    return () => clearInterval(intervalRef.current);
  }, [children, index, printText]);

  return <span className={styles.text}>{printText}</span>;
};

export default Printer;

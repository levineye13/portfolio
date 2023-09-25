import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';

import styles from './index.module.scss';

interface IPrinter {
  readonly children: string;
  readonly ms: number;
}

const Printer: FC<IPrinter> = ({ children, ms }): ReactElement => {
  const [printText, setPrintText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const add = (): void => {
      setPrintText((currentText) => currentText + children[index]);
      setIndex((currentIndex) => currentIndex + 1);
    };

    const drop = (): void => {
      setPrintText(() => '');
      setIndex(() => 0);
    };

    intervalRef.current = setInterval(() => {
      if (children.length === index) {
        drop();
      } else {
        add();
      }
    }, ms);

    return () => clearInterval(intervalRef.current);
  }, [children, ms, index, printText]);

  return <span className={styles.text}>{printText}</span>;
};

export default Printer;

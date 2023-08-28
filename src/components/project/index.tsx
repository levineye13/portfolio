import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IProject {
  readonly src: string;
  readonly title: string;
}

const Project: FC<IProject> = ({ src, title }): ReactElement => {
  return (
    <article className={styles.article}>
      <figure className={styles.figure}>
        <div className={styles.container}>
          <img src={src} alt={title} className={styles.img} />
        </div>
        <figcaption className={styles.title}>{title}</figcaption>
      </figure>
    </article>
  );
};

export default Project;

import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IProject {
  readonly src: string;
  readonly title: string;
  readonly link: string;
}

const Project: FC<IProject> = ({ src, title, link }): ReactElement => {
  return (
    <article className={styles.article}>
      <figure className={styles.figure}>
        <a
          className={styles.link}
          href={link}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={src} alt={title} className={styles.img} />
        </a>
        <figcaption className={styles.title}>{title}</figcaption>
      </figure>
    </article>
  );
};

export default Project;

import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface ISkill {
  readonly name: string;
  readonly img: string;
}

const Skill: FC<ISkill> = ({ name, img }): ReactElement => {
  return (
    <figure className={styles.figure}>
      <img className={styles.img} src={img} alt={name} />
      <figcaption className={styles.name}>{name}</figcaption>
    </figure>
  );
};

export default Skill;

import React, { FC, ReactElement } from 'react';

import Title from '../../components/section-title';
import Skill from '../../components/skill';
import { skills } from '../../core/data/skills';
import styles from './index.module.scss';

const Skills: FC = (): ReactElement => {
  return (
    <section className={styles.section}>
      <Title>Skills</Title>
      <p className={styles.subtitle}>Frontend</p>
      <ul className={styles.list}>
        {skills.frontend.map((skill) => (
          <Skill {...skill} />
        ))}
        <li className={styles.item}></li>
      </ul>
      <p className={styles.subtitle}>Backend</p>
      <ul className={styles.list}>
        {skills.backend.map((skill) => (
          <Skill {...skill} />
        ))}
      </ul>
    </section>
  );
};

export default Skills;

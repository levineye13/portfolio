import React, { ReactElement } from 'react';

import Title from '../../components/section-title';
import ProjectList from '../../components/projects';
import styles from './index.module.scss';

const Projects = (): ReactElement => {
  return (
    <section className={styles.section}>
      <Title className={styles.title}>Projects</Title>
      <ProjectList />
    </section>
  );
};

export default Projects;

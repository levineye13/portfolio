import React, { FC, ReactElement } from 'react';

import Title from '../../components/section-title';
import ProjectList from '../../components/projects';
import Loader from '../../components/loader';
import styles from './index.module.scss';
import { useAppSelector } from '../../core/store/hooks';

const Projects: FC = (): ReactElement => {
  const { loading } = useAppSelector((state) => state.project);

  return (
    <section className={styles.section}>
      <Title className={styles.title}>Packages</Title>
      {loading ? <Loader /> : <ProjectList type='packages' />}
    </section>
  );
};

export default Projects;

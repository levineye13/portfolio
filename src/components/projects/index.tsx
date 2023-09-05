import React, { ReactElement } from 'react';

import Project from '../project';
import styles from './index.module.scss';
import { useAppSelector } from '../../core/store/hooks';
import { gitRepos } from '../../core/data/repos';

const Projects = (): ReactElement => {
  const { projects } = useAppSelector((state) => state.project);

  return (
    <ul className={styles.list}>
      {projects.map((project) => {
        const rep = gitRepos.find((rep) => rep.name === project.name);

        return (
          <li className={styles.item} key={project.id}>
            <Project
              src={rep?.img || ''}
              title={project.name}
              link={project.html_url}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Projects;

import React, { ReactElement } from 'react';

import Project from '../project';
import styles from './index.module.scss';
import Img from '../../images/img.png';

const Projects = (): ReactElement => {
  return (
    <div className={styles.div}>
      <Project src={Img} title="Erundistika" />
      <Project src={Img} title="Erundistika" />
      <Project src={Img} title="Erundistika" />
      <Project src={Img} title="Erundistika" />
      <Project src={Img} title="Erundistika" />
      <Project src={Img} title="Erundistika" />
    </div>
  );
};

export default Projects;

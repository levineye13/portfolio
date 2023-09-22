import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from '../about';
import Projects from '../projects';
import Skills from '../skills';
import Contacts from '../contacts';
import styles from './index.module.scss';
import { APP_ROUTES } from '../../core/constants';

const Main = () => {
  const { projects, skills, contacts } = APP_ROUTES;

  return (
    <main className={styles.main}>
      <Routes>
        <Route
          path={projects}
          element={
            <>
              <About />
              <Projects />
            </>
          }
        />
        <Route path={skills} element={<Skills />} />
        <Route path={contacts} element={<Contacts />} />
      </Routes>
    </main>
  );
};

export default Main;

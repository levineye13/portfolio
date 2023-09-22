import React, { useEffect } from 'react';

import { getProjects } from '../../core/store/projectSlice';
import Header from '../header';
import Main from '../../pages/main';
import Footer from '../footer';
import styles from './index.module.scss';
import { useAppDispatch } from '../../core/store/hooks';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;

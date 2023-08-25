import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import { APP_ROUTES } from '../../utils/constants';
import styles from './index.module.scss';

const { projects, skills, contacts } = APP_ROUTES;

const checkActiveLink = (
  isActive: boolean,
  style: string,
  activeStyle: string
): string => (isActive ? `${style} ${activeStyle}` : style);

const Header = (): ReactElement => {
  return (
    <header className={styles.header}>
      <p className={styles.description}>Portfolio</p>
      <nav className={styles.menu}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink
              to={projects}
              className={({ isActive }) =>
                checkActiveLink(isActive, styles.link, styles.link_active)
              }
            >
              Projects
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to={skills}
              className={({ isActive }) =>
                checkActiveLink(isActive, styles.link, styles.link_active)
              }
            >
              Skills
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to={contacts}
              className={({ isActive }) =>
                checkActiveLink(isActive, styles.link, styles.link_active)
              }
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

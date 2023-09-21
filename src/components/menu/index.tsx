import React, { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './index.module.scss';
import { APP_ROUTES } from '../../core/constants';
import { useAppSelector } from '../../core/store/hooks';
import BurgerButton from '../burger-button';

const { projects, skills, contacts } = APP_ROUTES;

const checkActiveLink = (
  isActive: boolean,
  style: string,
  activeStyle: string
): string => (isActive ? `${style} ${activeStyle}` : style);

const Menu: FC = (): ReactElement => {
  const { active } = useAppSelector((state) => state.menu);

  return (
    <nav className={`${styles.menu} ${active ? styles.menu_active : ''}`}>
      <div className={styles.background} />
      <BurgerButton />
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
  );
};

export default Menu;

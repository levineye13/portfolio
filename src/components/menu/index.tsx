import React, { FC, MouseEvent, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './index.module.scss';
import { APP_ROUTES } from '../../core/constants';
import { useAppDispatch, useAppSelector } from '../../core/store/hooks';
import Background from '../../components/background';
import BurgerButton from '../burger-button';
import { close } from '../../core/store/menuSlice';

const { projects, timeline, skills, contacts } = APP_ROUTES;

const checkActiveLink = (
  isActive: boolean,
  style: string,
  activeStyle: string
): string => (isActive ? `${style} ${activeStyle}` : style);

const Menu: FC = (): ReactElement => {
  const { active } = useAppSelector((state) => state.menu);
  const dispatch = useAppDispatch();

  const handleRadialClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  const handleLinkClick = (): void => {
    dispatch(close());
  };

  return (
    <nav className={`${styles.menu} ${active ? styles.menu_active : ''}`}>
      <Background isActive={active}>
        <div className={styles.radial} onClick={handleRadialClick} />
      </Background>
      <BurgerButton />
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            to={projects}
            onClick={handleLinkClick}
            className={({ isActive }) =>
              checkActiveLink(isActive, styles.link, styles.link_active)
            }
          >
            Projects
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to={timeline}
            onClick={handleLinkClick}
            className={({ isActive }) =>
              checkActiveLink(isActive, styles.link, styles.link_active)
            }
          >
            Timeline
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to={skills}
            onClick={handleLinkClick}
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
            onClick={handleLinkClick}
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

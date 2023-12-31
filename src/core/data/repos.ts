import Burger from '../../images/gitRepos/react-burger.png';
import Mesto from '../../images/gitRepos/mesto.png';
import Movies from '../../images/gitRepos/movies-explorer.png';
import Travel from '../../images/gitRepos/russian-travel.png';
import Vpn from '../../images/gitRepos/laslesvpn.png';
import Project from '../../images/gitRepos/project-company.png';
import LeasingCar from '../../images/gitRepos/leasing-car.png';
import Npm from '../../images/gitRepos/npm.png';

export type TRep = {
  name: string;
  img: string;
  isPackage?: boolean;
};

export const gitRepos: TRep[] = [
  { name: 'react-burger', img: Burger },
  { name: 'mesto-react', img: Mesto },
  { name: 'react-mesto-api-full', img: Mesto },
  { name: 'LaslesVPN', img: Vpn },
  { name: 'project-company', img: Project },
  { name: 'russian-travel', img: Travel },
  { name: 'movies-explorer-frontend', img: Movies },
  { name: 'movies-explorer-backend', img: Movies },
  { name: 'leasing-car', img: LeasingCar },
  { name: 'react-input-mask-hook', img: Npm, isPackage: true },
];

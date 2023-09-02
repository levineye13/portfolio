import { images } from '../../images';

type Skills = {
  [key in 'frontend' | 'backend']: Array<{ name: string; img: string }>;
};

export const skills: Skills = {
  frontend: [
    { name: 'HTML5', img: images.html },
    { name: 'CSS3', img: images.css },
    { name: 'Sass', img: images.sass },
    { name: 'JavaScript', img: images.js },
    { name: 'TypeScript', img: images.ts },
    { name: 'React', img: images.react },
    { name: 'Redux', img: images.redux },
    { name: 'Webpack', img: images.webpack },
    { name: 'Figma', img: images.figma },
    { name: 'Jest', img: images.jest },
  ],
  backend: [
    { name: 'NodeJs', img: images.node },
    { name: 'Express', img: images.express },
    { name: 'Mongoose', img: images.mongoose },
    { name: 'Sequelize', img: images.sequelize },
    { name: 'HTTP', img: images.http },
    { name: 'API REST', img: images.restapi },
    { name: 'Postman', img: images.postman },
  ],
};

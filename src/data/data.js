export const tecnologies = [
  {
    id: 1,
    name: 'html',
    image: require('../assets/html.png'),
  },
  {
    id: 2,
    name: 'css',
    image: require('../assets/css.png'),
  },
  {
    id: 3,
    name: 'javascript',
    image: require('../assets/javascript.png'),
  },
  {
    id: 4,
    name: 'java',
    image: require('../assets/java.png'),
  },
  {
    id: 5,
    name: 'react',
    image: require('../assets/react.png'),
  },
  {
    id: 6,
    name: 'node js',
    image: require('../assets/node.png'),
  },
  {
    id: 7,
    name: 'mongo db',
    image: require('../assets/mongo.png'),
  },
  {
    id: 8,
    name: 'mysql',
    image: require('../assets/mysql.png'),
  },
  {
    id: 9,
    name: 'postgresql',
    image: require('../assets/pos.png'),
  },
  {
    id: 10,
    name: 'spring',
    image: require('../assets/spring.png'),
  },
  {
    id: 11,
    name: 'hibernate',
    image: require('../assets/hibernate.png'),
  },
  {
    id: 12,
    name: 'github',
    image: require('../assets/github.png'),
  },
]

export const projects = [
  {
    id: 1,
    name: 'Movie App',
    image: require('../assets/movie-app.png'),
    tecnologies: ['react', 'context', 'styled-components'],
    description: 'front end implementation',
    links: {
      repository: 'https://github.com/Yauris12/movie-app',
      page: 'https://yauris12.github.io/movie-app/',
    },
  },
  {
    id: 2,
    name: 'Instagram clone',
    image: require('../assets/instagram.PNG'),
    tecnologies: [
      'react',
      'context',
      'styled-components',
      'mongoose',
      'express',
      'jWT',
    ],
    description: 'full stack implementation',
    links: {
      repository: 'https://github.com/Yauris12/CloneReact',
    },
    links: {
      repository: 'https://github.com/Yauris12/movie-app',
    },
  },
  {
    id: 3,
    name: 'Task-list ',
    image: require('../assets/taskList.PNG'),
    tecnologies: ['react', 'redux', 'formik', 'JWT'],
    description: 'frontend  implementation',
    links: {
      repository: 'https://github.com/Yauris12/TaskList/tree/master',
      page: 'https://yauris12.github.io/TaskList/',
    },
  },
  {
    id: 4,
    name: 'POS BAZAR',
    image: require('../assets/poz-bazar.PNG'),
    tecnologies: [
      'react',
      'redux',
      'styled-components',
      'mongoose',
      'express',
      'JWT',
    ],
    description: 'full stack implementation',
    links: {
      repository: 'https://github.com/Yauris12/POS-BAZAR',
    },
  },
  {
    id: 5,
    name: 'Ecommerce',
    image: require('../assets/ecommerce.PNG'),
    tecnologies: ['react', 'context', 'styled-components'],
    description: 'front end implementation',
    links: {
      repository: 'https://github.com/Yauris12/ecommerce-app',
    },
  },
  {
    id: 6,
    name: 'Encrypter',
    image: require('../assets/encriptador.PNG'),
    tecnologies: ['js', 'html', 'css'],
    description: 'front end implementation',
    links: {
      repository: 'https://github.com/Yauris12/ALURA-SPRING01',
      page: 'https://yauris12.github.io/ALURA-SPRING01/',
    },
  },
]

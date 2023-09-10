import ApiIcon from '@mui/icons-material/Api'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode'
import LaptopIcon from '@mui/icons-material/Laptop'
import StorageIcon from '@mui/icons-material/Storage'

import { ServiceType } from '@/types/utils.type'
import { Cpp } from '../../public/brands'

export const ServicesData: ServiceType[] = [
  {
    Icon: LaptopIcon,
    title: 'Frontend Developer',
    description: 'I can build a beautiful and scalable SPA using HTML, CSS and React.JS'
  },
  {
    Icon: StorageIcon,
    title: 'Backend Developer',
    description: 'I can handle database, server, API using Express & other popular frameworks'
  },
  {
    Icon: ApiIcon,
    title: 'API Developer',
    description: 'I can develop  REST API using Node API'
  },
  {
    Icon: DeveloperModeIcon,
    title: 'Competitive Coder',
    description: 'A daily problem solver in Leet Code and Code Forces'
  }
]

export const SkillsData = {
  languages: [
    {
      title: 'C++',
      image: '/assets/c-plus-plus-icon.png'
    },
    {
      title: 'Python',
      image: '/assets/python-icon.png'
    },
    {
      title: 'Javascript',
      image: '/assets/javascript-icon.png'
    },
    {
      title: 'Typescript',
      image: '/assets/typescript-icon.png'
    }
  ],
  webDevelopment: [
    {
      title: 'HTML',
      image: '/assets/html-icon.png'
    },
    {
      title: 'CSS',
      image: '/assets/css-icon.png'
    },
    {
      title: 'ReactJs',
      image: '/assets/react-js-icon.png'
    },
    {
      title: 'NextJs',
      image: '/assets/nextjs.png'
    },

    {
      title: 'Redux',
      image: '/assets/redux-icon.png'
    },
    {
      title: 'ReactQuery',
      image: '/assets/react-query-icon.png'
    },
    {
      title: 'Material UI',
      image: '/assets/material.png'
    },
    {
      title: 'Sass',
      image: '/assets/sass-icon.png'
    },
    {
      title: 'TailwindCSS',
      image: '/assets/tailwind-css-icon.png'
    }
  ],
  backend: [
    {
      title: 'NodeJs',
      image: '/assets/node-js-icon.png'
    },
    {
      title: 'ExpressJs',
      image: '/assets/express-js-icon.png'
    },
    {
      title: 'MongoDB',
      image: '/assets/mongodb-icon.png'
    },
    {
      title: 'MySQL',
      image: '/assets/mysql-icon.png'
    },
    {
      title: 'RestAPI',
      image: '/assets/api-icon.png'
    }
  ],
  tools: [
    {
      title: 'Github',
      image: '/assets/github-icon.png'
    },
    {
      title: 'Postman',
      image: '/assets/postman-icon.png'
    },
    {
      title: 'VSCode',
      image: '/assets/visual-studio-code-icon.png'
    },
    {
      title: 'Photoshop',
      image: '/assets/adobe-photoshop-icon.png'
    },
    {
      title: 'Illustrator',
      image: '/assets/adobe-illustrator-icon.png'
    },
    {
      title: 'Figma',
      image: '/assets/figma-icon.png'
    },
    {
      title: 'Docker',
      image: '/assets/docker-icon.png'
    },
    {
      title: 'Ubuntu',
      image: '/assets/ubuntu-color-icon.png'
    }
  ]
}

// https://img.shields.io/badge/styled--components-000000?style=for-the-badge&logo=styled-components&logoColor=white
// export const technologies = {
//   html:{icon:}
// }

export const brandIcon = {
  html: 'https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
  css: 'https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
  react: 'https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white',
  nextJs: 'https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white',
  sass: 'https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white',
  typescript: 'https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white',
  reactquery: 'https://img.shields.io/badge/react--query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white',
  redux: 'https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white',
  tailwindcss: 'https://img.shields.io/badge/tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white'
}

export const projectsData = [
  {
    title: 'MLOPS MARATHON',
    techs: [brandIcon.react, brandIcon.nextJs, brandIcon.sass],
    summary:
      'Create the MLOps Marathon website for the inaugural MLOps Marathon 2023 competition in Vietnam. As the first event of its kind in the country, the competition focuses on Machine Learning Operations (MLOps). ',
    projectDescription:
      'In this project, I participated in building the website for the MLOps Marathon 2023 competition, the first MLOps (Machine Learning Operations) competition in Vietnam. The main goal of the project was to create an efficient website optimized for fast loading speed and responsive across various mobile devices and platforms.',
    keyTasks: [
      'Website Development: I used appropriate technologies to build the MLOps Marathon website, including HTML, CSS, and JavaScript. Specifically, I employed code optimization techniques to ensure fast loading speed and excellent performance of the website.',
      'Loading Speed Optimization: To ensure fast loading of the website, I implemented measures to optimize images, used optimization tools, and compressed images to reduce the website`s file size. I also utilized on-demand website loading techniques (lazy loading) to reduce initial load times.',
      'Responsive Interface Design: I designed the website`s interface to be mobile-friendly, ensuring that users have a great experience on all types of devices, including mobile phones and tablets. I employed responsive design techniques such as Media Queries to adapt the interface to different screen sizes.',
      'Testing and Quality Assurance: I conducted automated testing and manual testing to ensure that the website operates stably and without errors on various platforms.'
    ],
    results:
      'The project was successfully completed with optimized loading speed and a responsive interface, ensuring that the MLOps Marathon 2023 website delivers a great user experience and serves the competition effectively.',
    tag: ['Front-end'],
    image: 'https://res.cloudinary.com/dpkkgg1hf/image/upload/v1692502392/Portfolio/mlops_wtqosq.png'
  },
  {
    title: 'Shopee clone',
    techs: [brandIcon.react, brandIcon.typescript, brandIcon.tailwindcss],
    summary:
      'This project involves creating a user-interface clone of the Shopee e-commerce platform. The goal is to replicate the user experience and design elements of the Shopee website. This includes developing similar features and functionalities to provide users with a familiar and intuitive shopping interface. The project aims to offer a seamless shopping experience akin to Shopee, enhancing user engagement and interaction.',
    tag: ['Front-end'],
    image: 'https://res.cloudinary.com/dpkkgg1hf/image/upload/v1692627622/Portfolio/shopee_eu6okt.png'
  },
  {
    title: 'The Pioneer Website',
    techs: [brandIcon.react, brandIcon.sass, brandIcon.redux],
    summary:
      'Create the MLOps Marathon website for the inaugural MLOps Marathon 2023 competition in Vietnam. As the first event of its kind in the country, the competition focuses on Machine Learning Operations (MLOps). ',
    tag: ['Front-end'],
    image: 'https://res.cloudinary.com/dpkkgg1hf/image/upload/v1692627296/Portfolio/pioneerclub_kprxiy.png'
  }
]

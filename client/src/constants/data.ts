import ApiIcon from '@mui/icons-material/Api'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode'
import LaptopIcon from '@mui/icons-material/Laptop'
import StorageIcon from '@mui/icons-material/Storage'

import { ServiceType } from '@/types/utils.type'

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
      image: '/assets/c-plus-plus-icon.png',
      color: '#00599C'
    },
    {
      title: 'Python',
      image: '/assets/python-icon.png',
      color: '#3776AB'
    },
    {
      title: 'Javascript',
      image: '/assets/javascript-icon.png',
      color: '#F7DF1E'
    },
    {
      title: 'Typescript',
      image: '/assets/typescript-icon.png',
      color: '#3178C6'
    }
  ]
}

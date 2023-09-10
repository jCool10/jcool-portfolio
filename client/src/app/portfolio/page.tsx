'use client'

import TitlePage from '@/components/shared/TitlePage'

import { ServicesData } from '@/constants/data'
import { ServiceType } from '@/types/utils.type'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import WorkIcon from '@mui/icons-material/Work'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { FunctionComponent } from 'react'

const ServiceCard: FunctionComponent<{ service: ServiceType }> = ({ service: { Icon, title, description } }) => (
  <ListItem className='flex col-span-1 p-6 shadow-50 bg-white/20 rounded-2xl' alignItems='flex-start'>
    <ListItemIcon>
      <Icon fontSize='large' color='primary' />
    </ListItemIcon>
    <ListItemText primaryTypographyProps={{ fontWeight: 'bold' }} primary={title} secondary={description} />
  </ListItem>
)

const Home = () => {
  return (
    <div>
      <div className='pb-4'>
        <TitlePage title='About me' />
        <div className='flex flex-col gap-2 text-base font-normal'>
          <p>Hello there!</p>
          <p>
            I&apos;m thrilled to welcome you to my portfolio. I am a passionate individual on a journey towards a career
            in web development. Currently, I am a fourth-year student majoring in Computer Engineering at the
            university. Throughout my academic journey and hands-on experiences during my time at university, I have
            accumulated a diverse knowledge of programming, interface design, and web application development. I am in a
            constant pursuit of enhancing my skills and staying abreast of emerging trends in the industry.
          </p>
          <p>Thank you for visiting, and I&apos;m excited to show you my work and progress.</p>
        </div>
      </div>

      {/* <List
        subheader={
          <h2 className='flex items-center text-2xl font-semibold'>
            <span className='inline-flex items-center justify-center w-12 h-12 mr-4 bg-slate-600 rounded-xl '>
              <WorkIcon color='primary' fontSize='large' />
            </span>
            Career Objective
          </h2>
        }
      >
        <ListItem alignItems='flex-start'>
          <ListItemIcon>
            <DoubleArrowIcon />
          </ListItemIcon>
          <ListItemText>
            My career objective is to excel as a Front-end Developer, crafting stunning and user-friendly interfaces. I
            am determined to be an invaluable asset to a dynamic team and organization, embracing continuous learning
            from industry experts. I aspire to contribute my skills to the company`s success while fostering personal
            growth in a professional and collaborative environment.
          </ListItemText>
        </ListItem>
      </List> */}

      <h2 className='flex items-center text-2xl font-semibold'>What I am doing</h2>
      <List className='grid grid-cols-1 gap-x-8 gap-y-5 lg:grid-cols-2'>
        {ServicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </List>
    </div>
  )
}

export default Home

'use client'

import TitlePage from '@/components/shared/TitlePage'
import React from 'react'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import LayersIcon from '@mui/icons-material/Layers'
import { InfoCard } from '@/components/shared/Sidebar'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { projectsData } from '@/constants/data'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import DensitySmallIcon from '@mui/icons-material/DensitySmall'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import DehazeIcon from '@mui/icons-material/Dehaze'
import CategoryIcon from '@mui/icons-material/Category'

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()

  const item = [
    { Icon: LayersIcon, title: 'Category', description: ['Front-end'] },
    { Icon: AccessTimeIcon, title: 'Time', description: ['2020 - nay'] }
  ]

  return (
    <div>
      <TitlePage title='Project' />

      <Button onClick={() => router.back()} variant='text' startIcon={<ArrowBackIcon />}>
        Back My Project
      </Button>

      <div
        style={{
          backgroundImage:
            'url(https://res.cloudinary.com/dpkkgg1hf/image/upload/v1692627622/Portfolio/shopee_eu6okt.png)',
          backgroundRepeat: 'no-repeat',
          height: 600,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className='relative -mx-[1.875rem] before:absolute before:top-0 before:left-0 before:bg-black/20 before:w-full before:h-full mb-4'
      >
        <div className='absolute bottom-[1.5rem] text-3xl font-bold left-[1.875rem]'>MLOps Marathon 2023</div>
      </div>

      <div>
        <div>
          {item.map((item, index) => (
            <InfoCard key={index} info={item} />
          ))}
        </div>
        <div>
          {/* <h1>Project Description</h1>
          <p>{projectsData[0].projectDescription}</p>
          <h1>Key tasks:</h1>
          <ol>
            {projectsData[0].keyTasks?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol> */}
          <List
            subheader={
              <h2 className='flex items-center gap-3 text-2xl font-semibold'>
                {/* <span className='inline-flex items-center justify-center p-3 mr-2 rounded-xl bg-white/20'> */}
                <DehazeIcon color='primary' />
                {/* </span> */}
                Project Description
              </h2>
            }
          >
            <ListItem alignItems='flex-start' className='p-0'>
              <ListItemText>
                My career objective is to excel as a Front-end Developer, crafting stunning and user-friendly
                interfaces. I am determined to be an invaluable asset to a dynamic team and organization, embracing
                continuous learning from industry experts. I aspire to contribute my skills to the company`s success
                while fostering personal growth in a professional and collaborative environment.
              </ListItemText>
            </ListItem>
          </List>

          <ul className='list-disc'></ul>

          <List
            className='list-disc list-inside'
            subheader={
              <h2 className='flex items-center text-2xl font-semibold text-black'>
                <span className='inline-flex items-center justify-center p-3 mr-2 rounded-xl bg-white/20'>
                  <CategoryIcon />
                </span>
                Key Tasks
              </h2>
            }
          >
            <li>
              Website Development: I used appropriate technologies to build the MLOps Marathon website, including HTML,
              CSS, and JavaScript. Specifically, I employed code optimization techniques to ensure fast loading speed
              and excellent performance of the website.
            </li>
            <li>
              Loading Speed Optimization: To ensure fast loading of the website, I implemented measures to optimize
              images, used optimization tools, and compressed images to reduce the website`s file size. I also utilized
              on-demand website loading techniques (lazy loading) to reduce initial load times.
            </li>
            <li>
              Responsive Interface Design: I designed the website`s interface to be mobile-friendly, ensuring that users
              have a great experience on all types of devices, including mobile phones and tablets. I employed
              responsive design techniques such as Media Queries to adapt the interface to different screen sizes.
            </li>
            <li>
              Testing and Quality Assurance: I conducted automated testing and manual testing to ensure that the website
              operates stably and without errors on various platforms.
            </li>
          </List>
        </div>
      </div>
    </div>
  )
}

export default page

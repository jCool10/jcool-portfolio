import SkillCard from '@/components/card/SkillCard'
import TitlePage from '@/components/shared/TitlePage'
import { SkillsData } from '@/constants/data'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import SchoolIcon from '@mui/icons-material/School'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { SiCplusplus, SiFigma } from '@icons-pack/react-simple-icons'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Link from 'next/link'

function Resume() {
  return (
    <div>
      <TitlePage title='Resume' />

      <List
        subheader={
          <h2 className='flex items-center mb-4 text-2xl font-semibold'>
            <span className='inline-flex items-center justify-center w-12 h-12 mr-4 shadow-40 bg-white/20 rounded-xl '>
              <ManageAccountsIcon color='primary' fontSize='large' />
            </span>
            Skills
          </h2>
        }
      >
        <ListItem className='flex flex-col pt-6 my-2 shadow-50 bg-white/20 rounded-2xl' alignItems='flex-start'>
          <h2 className='mb-2 text-2xl font-medium '>Languages</h2>
          <div className='grid w-full grid-cols-3 lg:grid-cols-5'>
            {SkillsData.languages.map((item, index) => (
              <SkillCard key={index} {...item} />
            ))}
          </div>
        </ListItem>

        <ListItem className='flex flex-col pt-6 my-2 shadow-50 bg-white/20 rounded-2xl' alignItems='flex-start'>
          <h2 className='mb-2 text-2xl font-medium'>Front-end</h2>
          <div className='grid w-full grid-cols-3 lg:grid-cols-5 '>
            {SkillsData.webDevelopment.map((item, index) => (
              <SkillCard key={index} {...item} />
            ))}
          </div>
        </ListItem>

        <ListItem className='flex flex-col pt-6 my-2 shadow-50 bg-white/20 rounded-2xl' alignItems='flex-start'>
          <h2 className='mb-2 text-2xl font-medium'>Back-end</h2>
          <div className='grid w-full grid-cols-3 lg:grid-cols-5'>
            {SkillsData.backend.map((item, index) => (
              <SkillCard key={index} {...item} />
            ))}
          </div>
        </ListItem>

        <ListItem className='flex flex-col pt-6 my-2 shadow-50 bg-white/20 rounded-2xl' alignItems='flex-start'>
          <h2 className='mb-2 text-2xl font-medium'>Tools</h2>
          <div className='grid w-full grid-cols-3 lg:grid-cols-5'>
            {SkillsData.tools.map((item, index) => (
              <SkillCard key={index} {...item} />
            ))}
          </div>
        </ListItem>
      </List>

      <div className='grid grid-cols-1 md:grid-cols-2'>
        <List
          className='relative col-span-1'
          subheader={
            <h2 className='flex items-center text-2xl font-semibold '>
              <span className='inline-flex items-center justify-center w-12 h-12 mr-4 bg-white/20 rounded-xl '>
                <SchoolIcon fontSize='large' />
              </span>
              Education
            </h2>
          }
        >
          <ListItem className="ml-6 inline-flex items-start flex-col border-l-2 before:bg-black before:content-[''] before:absolute before:left-[-0.3125rem] before:h-[0.5625rem] before:w-[0.5625rem] before:rounded-[50%] before:top-[17px] ">
            <h3 className='text-black/60'>2020 - now</h3>
            <h1 className='text-lg font-semibold'>Computer Engineer</h1>
            <h2 className='text-base font-medium'>Da Nang University of Science and Technology</h2>
          </ListItem>
        </List>

        <List
          className='col-span-1'
          subheader={
            <h2 className='flex items-center text-2xl font-semibold '>
              <span className='inline-flex items-center justify-center w-12 h-12 mr-4 bg-white/20 rounded-xl '>
                <BusinessCenterIcon fontSize='large' />
              </span>
              Activities
            </h2>
          }
        >
          <ListItem className="ml-6 inline-flex items-start flex-col border-l-2 before:bg-black before:content-[''] before:absolute before:left-[-0.3125rem] before:h-[0.5625rem] before:w-[0.5625rem] before:rounded-[50%] before:top-[17px] ">
            <h3 className='text-black/60'>3/2023 - now</h3>
            <h1 className='text-lg font-semibold'>Front-end Developer</h1>
            <Link href='https://www.facebook.com/MLOpsVN' target='_blank' className='text-base font-medium'>
              MLOpsVN
            </Link>
          </ListItem>
          <ListItem className="ml-6 inline-flex items-start flex-col border-l-2 before:bg-black before:content-[''] before:absolute before:left-[-0.3125rem] before:h-[0.5625rem] before:w-[0.5625rem] before:rounded-[50%] before:top-[17px] ">
            <h3 className='text-black/60'>10/2022 - now</h3>
            <h1 className='text-lg font-semibold'>Leader of Web/App and Algorithm</h1>
            <Link
              href='https://www.facebook.com/CLBSVNCKHPioneerKhoaDTVT'
              target='_blank'
              className='text-base font-medium'
            >
              Pioneer Club
            </Link>
          </ListItem>
        </List>
      </div>
    </div>
  )
}

export default Resume

'use client'

import Link from 'next/link'

import { ServiceType, SidebarType } from '@/types/utils.type'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import FacebookIcon from '@mui/icons-material/Facebook'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import { Button } from '@mui/material'
import { FunctionComponent } from 'react'

const SidebarData: ServiceType[] = [
  { Icon: AlternateEmailIcon, title: 'Email', description: 'hngloc10@gmail.com' },
  { Icon: LocalPhoneIcon, title: 'Phone number', description: '037 483 0117' }
]

export const InfoCard: FunctionComponent<{ info: SidebarType }> = ({ info: { Icon, title, description } }) => (
  <div className='inline-flex items-center justify-start h-12 col-span-1 gap-4 mb-2 w-60'>
    <div className='p-1 text-center text-white shadow-50 w-11 h-11 bg-white/20 rounded-xl'>
      <Icon fontSize='large' />
    </div>
    <div className='inline-flex flex-col items-start justify-start pb-px w-44'>
      <div className='text-xs font-normal leading-tight uppercase opacity-70 text-zinc-300'>{title}</div>
      <div className='inline-flex items-start justify-start pb-px w-44'>
        <Link href='tel:+84374830117' className='text-sm font-medium leading-normal text-neutral-50'>
          {description}
        </Link>
      </div>
    </div>
  </div>
)

const Sidebar = () => {
  return (
    <div className='relative flex flex-col items-start justify-center w-full gap-8 p-8 shadow xl:items-center backdrop-blur-3xl xl:w-72 bg-white/20 rounded-2xl'>
      <div className='flex items-center justify-start gap-3 xl:flex-col '>
        <img className='rounded-[2rem] h-[7.5rem] w-[7.5rem]  xl:w-44' src='/avatar.jpg' alt='avatar' />
        <div className='flex flex-col items-center justify-center gap-2 px-4 xl:gap-4'>
          <div className='text-2xl font-medium text-center text-white'>Hoang Ngoc Loc</div>
          <div className='self-stretch px-4 pt-1.5 pb-2 bg-zinc-800 rounded-lg justify-center items-start inline-flex'>
            <div className='text-sm font-normal leading-3 text-center text-white'>Web Development</div>
          </div>

          <div className='flex items-center gap-2'>
            <Link
              href='https://www.facebook.com/reddevils.1908'
              target='_blank'
              className='text-[#1877F2] p-2 rounded-lg bg-slate-100'
            >
              <FacebookIcon />
            </Link>

            <Link
              href='https://www.linkedin.com/in/hoang-ngoc-loc/'
              target='_blank'
              className='text-[#0077B5] p-2 rounded-lg bg-slate-100'
            >
              <LinkedInIcon />
            </Link>

            <Link
              href='https://github.com/jCool10'
              target='_blank'
              className='p-2 text-[#0B0909] rounded-lg bg-slate-100'
            >
              <GitHubIcon />
            </Link>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-start w-full gap-3 '>
        <div className='w-full h-px bg-neutral-700' />
        <div className='flex flex-col items-start justify-start w-full'>
          <div className='grid w-full grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 '>
            <div className='inline-flex items-center justify-start h-12 col-span-1 gap-4 mb-2 w-60'>
              <div className='p-1 text-center shadow-50 w-11 h-11 bg-white/20 rounded-xl'>
                <AlternateEmailIcon color='primary' fontSize='large' />
              </div>
              <div className='inline-flex flex-col items-start justify-start pb-px w-44'>
                <div className='text-xs font-normal leading-tight uppercase opacity-70 text-zinc-300'>Email</div>
                <div className='inline-flex items-start justify-start pb-px w-44'>
                  <Link href='mailto:hngloc10@gmail.com' className='text-sm font-medium leading-normal text-neutral-50'>
                    hngloc10@gmail.com
                  </Link>
                </div>
              </div>
            </div>

            <div className='inline-flex items-center justify-start h-12 col-span-1 gap-4 mb-2 w-60'>
              <div className='p-1 text-center text-[#1A1003] shadow-50 w-11 h-11 bg-white/20 rounded-xl'>
                <LocalPhoneIcon color='primary' fontSize='large' />
              </div>
              <div className='inline-flex flex-col items-start justify-start pb-px w-44'>
                <div className='text-xs font-normal leading-tight uppercase opacity-70 text-zinc-300'>Phone number</div>
                <div className='inline-flex items-start justify-start pb-px w-44'>
                  <Link href='tel:+84374830117' className='text-sm font-medium leading-normal text-neutral-50'>
                    0374830117
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-px bg-neutral-700' />

        <a
          href='/CV-HoangNgocLoc.pdf'
          download
          className='flex items-center justify-center overflow-hidden rounded-full bg-[#0B0909]'
        >
          <Button startIcon={<FileDownloadIcon fontSize='large' />} size='large' variant='contained'>
            Download CV
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Sidebar

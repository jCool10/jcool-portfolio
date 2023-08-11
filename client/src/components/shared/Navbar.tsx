import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LayersIcon from '@mui/icons-material/Layers'
import ContactPageIcon from '@mui/icons-material/ContactPage'

const Navbar = () => {
  return (
    <div className='border border-[color:var(--color-border)] rounded-[0_var(--radius-20)_0_var(--radius-20)] flex items-center justify-end h-[4.375rem] absolute z-[1] px-[2.375rem] py-0 border-solid right-0 top-0 bg-[#1e1e1f]'>
      <ul className='relative flex items-center justify-center h-full'>
        <li className='w-[70px] h-[70px] z-[1] mr-8'>
          <a
            href='/portfolio'
            className='relative flex justify-center items-center flex-col w-full text-center font-[normal]'
          >
            <span className='block leading-[60px] text-2xl text-center text-white transition-[0.5s]'>
              <HomeIcon fontSize='large' />
            </span>
          </a>
        </li>

        <li className='w-[70px] h-[70px] z-[1] mr-8'>
          <a
            href='/portfolio/resume'
            className='relative flex justify-center items-center flex-col w-full text-center font-[normal]'
          >
            <span className='block leading-[60px] text-2xl text-center text-white transition-[0.5s]'>
              <AccountCircleIcon fontSize='large' />
            </span>
          </a>
        </li>
        <li className='w-[70px] h-[70px] z-[1] mr-8'>
          <a
            href='/portfolio/project'
            className='relative flex justify-center items-center flex-col w-full text-center font-[normal]'
          >
            <span className='block leading-[60px] text-2xl text-center text-white transition-[0.5s]'>
              <LayersIcon fontSize='large' />
            </span>
          </a>
        </li>
        <li className='w-[70px] h-[70px] z-[1] mr-8'>
          <a
            href='/portfolio/contact'
            className='relative flex justify-center items-center flex-col w-full text-center font-[normal]'
          >
            <span className='block leading-[60px] text-2xl text-center text-white transition-[0.5s]'>
              <ContactPageIcon fontSize='large' />
            </span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar

import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LayersIcon from '@mui/icons-material/Layers'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  const [value, setValue] = React.useState(pathname)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <BottomNavigation
      className='rounded-[var(--radius-20)_var(--radius-20)_0_0] shadow-[var(--box-shadow-30)] flex items-center justify-center fixed h-[3.8125rem] w-full z-[1112]  right-0 bottom-0 lg:w-[500px] lg:rounded-[0_var(--radius-20)_0_var(--radius-20)] lg:h-[4.375rem] lg:absolute lg:z-10 lg:px-[2.375rem] lg:py-0 lg:right-0 lg:top-0  '
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        href='/portfolio'
        LinkComponent={Link}
        label='Home'
        value='/portfolio'
        icon={<HomeIcon fontSize='large' />}
      />

      <BottomNavigationAction
        href='/portfolio/resume'
        LinkComponent={Link}
        label='Resume'
        value='/portfolio/resume'
        icon={<AccountCircleIcon fontSize='large' />}
      />

      <BottomNavigationAction
        href='/portfolio/project'
        LinkComponent={Link}
        label='Project'
        value='/portfolio/project'
        icon={<LayersIcon fontSize='large' />}
      />

      <BottomNavigationAction
        href='/portfolio/contact'
        LinkComponent={Link}
        label='Contact'
        value='/portfolio/contact'
        icon={<ContactPageIcon fontSize='large' />}
      />
    </BottomNavigation>
  )
}

export default Navbar

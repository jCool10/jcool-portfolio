'use client'

import LoginIcon from '@mui/icons-material/Login'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from './Logo'

const Header = () => {
  const [open, setOpen] = useState<boolean>(false)
  const pathname = usePathname()

  const titleLogo = pathname.split('/')[1]
  console.log(titleLogo)

  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  }

  return (
    <div className='flex items-center justify-between py-4 '>
      <div>
        <Logo title={titleLogo} />
      </div>

      <div className='space-x-6'>
        {/* <Button onClick={() => setOpen(true)} size='medium' variant='contained' endIcon={<LoginIcon />}>
          Login
        </Button>
        <Button onClick={() => setOpen(true)} size='medium' variant='contained' endIcon={<PersonAddAltIcon />}>
          Register
        </Button> */}
      </div>

      {/* <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}></Box>
      </Modal> */}
    </div>
  )
}

export default Header

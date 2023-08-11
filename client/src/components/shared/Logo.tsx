import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  title: string
}

const Logo = ({ title = 'Home' }: Props) => {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <Image src='/logo.png' width={200} height={100} alt='JCool' />
      <span className='text-5xl font-extrabold text-white capitalize border-s-4 ps-2'> {title}</span>
    </Link>
  )
}

export default Logo

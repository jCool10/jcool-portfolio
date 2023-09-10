'use client'

import React from 'react'
import { docker } from '../../../public/brands'
// import { SiReact, SiUbuntu } from '@icons-pack/react-simple-icons'
import { IconProps } from '@icons-pack/react-simple-icons/types.d'
import Image from 'next/image'
// import { siSimpleicons } from 'simple-icons'
interface Props {
  title: string
  image: string
}

const SkillCard = ({ title, image }: Props) => {
  return (
    <div className={`p-5 max-h-52 col-span-1 items-center justify-end inline-flex flex-col rounded-3xl  `}>
      <Image src={image} height={70} width={70} alt='' />
      <h3 className='mt-2 text-2xl font-semibold'>{title}</h3>
    </div>
  )
}

export default SkillCard

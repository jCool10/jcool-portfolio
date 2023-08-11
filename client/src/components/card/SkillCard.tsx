'use client'

import Image from 'next/image'

interface Props {
  title: string
  image: string
  color: string
}

const SkillCard = ({ title, image, color }: Props) => {
  return (
    <div className={`p-5 w-40 rounded-3xl text-center  hover:opacity-60`} style={{ backgroundColor: color }}>
      <Image src={image} width={70} height={75} alt='' />
      <h3 className='mt-2 text-2xl font-semibold'>{title}</h3>
    </div>
  )
}

export default SkillCard

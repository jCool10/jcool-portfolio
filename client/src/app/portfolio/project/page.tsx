'use client'

import ProjectCard from '@/components/card/ProjectCard'
import TitlePage from '@/components/shared/TitlePage'
import { projectsData } from '@/constants/data'
import { FunctionComponent } from 'react'
// import { useState } from 'react'

const Project: FunctionComponent = () => {
  return (
    <div>
      <TitlePage title='Project' />

      <div className='flex flex-row flex-wrap items-center justify-start gap-4 mb-4'>
        {['All', 'Front-end', 'Back-end', 'Full stack'].map((item) => (
          <button key={item} type='button' className='px-4 py-2 rounded-lg bg-white/20'>
            {item}
          </button>
        ))}
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
        {projectsData.map((item, index) => (
          <ProjectCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Project

'use client'

import ProjectCard from '@/components/card/ProjectCard'
import TitlePage from '@/components/shared/TitlePage'
import { FunctionComponent } from 'react'
// import { useState } from 'react'

const Project: FunctionComponent = () => {
  return (
    <div>
      <TitlePage title='Project' />

      <div className='grid grid-cols-3 gap-4'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

export default Project

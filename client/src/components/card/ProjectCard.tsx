import Image from 'next/image'

const ProjectCard = () => {
  return (
    <div className='col-span-1 gap-4 p-3 shadow-50 bg-white/20 rounded-2xl'>
      <div className='w-full mb-3 overflow-hidden rounded-2xl max-h-48 '>
        <Image src='/Honda-1.png' width={500} height={200} alt='' />
      </div>
      <div>
        <h3>Honda</h3>
        <h3>Front-end</h3>
      </div>
    </div>
  )
}

export default ProjectCard

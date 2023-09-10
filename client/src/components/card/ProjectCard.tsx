import Image from 'next/image'
import GitHubIcon from '@mui/icons-material/GitHub'
import { IconButton } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Link from 'next/link'

const a = ['react', 'css3', 'tailwind', 'tailwindcss']
export const technologies = {
  html5: [],
  css3: {},
  tailwindcss: {}
}

interface Props {
  title: string
  techs: string[]
  summary: string
  tag: string[]
  image: string
}

const ProjectCard = ({ tag, image, summary, techs, title }: Props) => {
  return (
    <div className='relative inline-flex flex-col items-center col-span-1 gap-4 p-4 bg-white shadow-50 rounded-xl'>
      <div className='relative w-full max-h-48'>
        <Image className='object-cover rounded-lg' src={image} width={500} height={200} alt='' />

        <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full gap-5 rounded-lg opacity-0 bg-black/50 hover:opacity-100'>
          {/* <Link href=''>
            <IconButton>
              <GitHubIcon fontSize='large' sx={{ color: 'white' }} />
            </IconButton>
          </Link> */}

          <Link href=''>
            {/* <IconButton> */}
            <VisibilityIcon fontSize='large' sx={{ color: 'white' }} />
            {/* </IconButton> */}
          </Link>
        </div>
      </div>

      <div className='relative'>
        <h3 className="text-black text-2xl font-semibold relative overflow-hidden after:content-[''] after:inline-block after:absolute after:w-full after:h-1 after:bg-gradient-line after:ml-[5px] after:bottom-3">
          {title}
        </h3>
        <div className='flex flex-wrap gap-2 mt-2'>
          {techs.map((item, index) => {
            return (
              <div key={index}>
                <img className='overflow-hidden rounded-lg bg-white/20' src={item} alt='' />
              </div>
            )
          })}
        </div>
        <div className='absolute flex items-center justify-center px-4 py-2 text-black -translate-x-1/2 bg-white rounded-xl -top-11 left-1/2'>
          <p className='font-medium'>{tag}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

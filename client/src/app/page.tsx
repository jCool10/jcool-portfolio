'use client'

import MenuCard from '@/components/card/MenuCard'

export default function Home() {
  return (
    <div className='flex flex-col justify-between w-full lg:flex-row '>
      <div className='flex flex-col justify-between p-10'>
        <div className='flex w-full h-[120px] text-[3.5rem] font-bold leading-none text-white my-10'>
          <h1 className='flex flex-col justify-end h-full border-b-12'>MY LAN</h1>
          <div className='w-[10rem] h-full border-12 rounded-r-[50px] border-white mx-[6px] ' />
          <h1 className='flex flex-col justify-start h-full border-t-12'>ING PAGE</h1>
        </div>

        <div>
          <MenuCard />
        </div>
      </div>

      <div className='items-center justify-center lg:w-[30%] w-full lg:h-[500px] h-[400px]'>
        <iframe
          title='Hero'
          className='w-full h-full'
          src='https://lottie.host/?file=e9dff47d-4d8f-4bc0-82a4-bbfd6a425ea5/yWv2RozKrD.json'
        />
      </div>
    </div>
  )
}

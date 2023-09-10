'use client'

import Navbar from '@/components/shared/Navbar'
import Sidebar from '@/components/shared/Sidebar'

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className='grid grid-cols-12 gap-8 '>
      <div className='col-span-12 lg:col-span-12 xl:col-span-3'>
        <Sidebar />
      </div>
      <div className='relative col-span-12 lg:col-span-12 xl:col-span-9 mb-14'>
        <Navbar />
        <div className=' backdrop-blur-3xl  rounded-[var(--radius-20)] shadow-[var(--box-shadow-24)] bg-white/20   p-[1.875rem] border-solid mb-[1.0625rem]'>
          {children}
        </div>
      </div>
    </section>
  )
}

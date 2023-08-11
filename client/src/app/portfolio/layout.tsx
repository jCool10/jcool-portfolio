'use client'

import Navbar from '@/components/shared/Navbar'
import Sidebar from '@/components/shared/Sidebar'

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className='grid grid-cols-12 '>
      <div className='col-span-12 lg:col-span-12 xl:col-span-3'>
        <Sidebar />
      </div>
      <div className='col-span-12 lg:col-span-12 xl:col-span-9'>
        <div className='relative backdrop-blur-3xl  rounded-[var(--radius-20)] shadow-[var(--box-shadow-24)] bg-white/20  text-white p-[1.875rem] border-solid mb-[1.0625rem]'>
          <Navbar />
          {children}
        </div>
      </div>
    </section>
  )
}

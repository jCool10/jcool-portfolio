'use client'

import Link from 'next/link'

const MenuCard = () => {
  const menuData = [
    { title: 'My Portfolio', description: 'This is my portfolio', path: '/portfolio' },
    { title: 'My Blog', description: 'This is my blog', path: '/blog' }
  ]

  return (
    <>
      <h1 className='mb-8 text-4xl font-bold text-white'>Menu</h1>
      <div className='flex w-full gap-8 '>
        {menuData.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className='bg-[#2C2F48] shadow-main-card  w-80 h-[9.5rem] rounded-3xl flex justify-end overflow-hidden'
            style={{
              backgroundImage: `url(/user.svg)`,
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className='w-[219px] bg-gradient-menu rounded-menu-radius'>
              <div
                className='w-[219px] h-full flex flex-col items-start ps-12 pt-5 gap-2'
                style={{
                  backgroundImage: `url(/Rectangle.png)`,
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <h1 className='text-2xl font-semibold text-white'>{item.title}</h1>
                <h2 className='text-base font-normal text-white/50'>{item.description}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default MenuCard

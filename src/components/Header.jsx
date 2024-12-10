import React from 'react'

const Header = () => {
  return (
    <header className='w-screen h-[40vh] pt-6 relative'>
      <div className="w-[90vw] md:w-[80vw] m-auto flex justify-between relative z-10">
        <img src="/images/logo.svg" alt="logo" />
        <nav className='text-black md:text-white absolute md:relative flex flex-col md:flex-row w-[90vw] md:w-fit bg-white md:bg-transparent py-6 md:py-0 top-12 md:top-0 pl-6 md:pl-0 gap-y-8 md:gap-y-0 md:gap-x-6 lg:gap-x-8 xl:gap-x-12 rounded-lg font-medium'>
          <a href="#">About</a>
          <a href="#">Discover</a>
          <a href="#">Get Started</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
import React from 'react'

const Header = () => {
  return (
    <header className='w-screen h-[40vh] pt-6'>
      <div className="w-[90vw] md:w-[80vw] m-auto flex justify-between relative">
        <img src="/images/logo.svg" alt="logo" />
        <nav className='text-black md:text-white absolute md:relative flex flex-col md:flex-row w-[90vw] md:w-fit bg-white md:bg-transparent py-4 md:py-0 top-12 md:top-0 pl-6'>
          <a href="#">About</a>
          <a href="#">Discover</a>
          <a href="#">Get Started</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
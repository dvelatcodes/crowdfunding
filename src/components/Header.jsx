import React from 'react'

const Header = () => {
  return (
    <header className='w-screen h-[40vh] pt-6'>
      <div className="w-[90vw] md:w-[80vw] m-auto flex justify-between">
        <img src="/images/logo.svg" alt="logo" />
        <nav>
          <a href="#">About</a>
          <a href="#">Discover</a>
          <a href="#">Get Started</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
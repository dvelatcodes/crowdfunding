import React from 'react'

const Button = ({text, color, }) => {
  return (
    <button className='text-white px-8 rounded-full font-semibold' style={{backgroundColor: color}}>
      {text}
    </button>
  )
}

export default Button
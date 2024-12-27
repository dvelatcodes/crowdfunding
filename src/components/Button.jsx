import React from 'react'

const Button = ({text, color, }) => {
  return (
    <button className='text-white' style={{backgroundColor: color}}>
      {text}
    </button>
  )
}

export default Button
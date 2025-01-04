import React from 'react'

const Button = ({text, color, swapColor}) => {
  return (
    <button className={`text-white px-8 rounded-full font-semibold ${swapColor}`}>
      {text}
    </button>
  )
}

export default Button
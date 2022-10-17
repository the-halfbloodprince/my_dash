import React from 'react'
import Clock from './Clock'

const Date = () => {
  return (
    <p className='text-6xl text-subtitle hover:text-subtitle-glow transition-all duration-500 ease-in'>
        Date: <span className='text-glow'> <Clock mode='date' /> </span> 
    </p>
  )
}

export default Date
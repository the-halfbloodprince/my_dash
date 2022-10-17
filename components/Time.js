import React from 'react'
import Clock from './Clock'

const Time = () => {
  return (
    <p className='text-7xl text-subtitle hover:text-subtitle-glow transition-all duration-500 ease-in' >
        It&apos;s <span className='text-glow text-[15vw]' ><Clock mode='time' /></span> now. 
    </p>
  )
}

export default Time
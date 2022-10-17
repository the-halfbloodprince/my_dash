import React from 'react'

const Greeting = ({ name }) => {
  return (
    <p className='text-6xl text-subtitle hover:text-subtitle-glow transition-all duration-500 ease-in'>
        Hi <span className='text-glow'> {`${name}`} </span>
    </p>
  )
}

export default Greeting
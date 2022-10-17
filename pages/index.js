import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  
  const name = 'Manish'
  
  return (
    <div>

      <head>
        <title>My Dash - Manish</title>
      </head>

      <main className='flex flex-col w-screen h-screen justify-center space-y-10 px-24 items-center'>
        <p className='text-6xl text-subtitle hover:text-subtitle-glow transition-all duration-500 ease-in'>Hi <span className='text-glow'>{`${name}`}</span></p>
        <p className='text-9xl text-subtitle hover:text-subtitle-glow transition-all duration-500 ease-in'>It's <span className='text-glow text-[15vw]'>19:27</span> now. </p>
        <p className='text-6xl text-subtitle hover:text-subtitle-glow transition-all duration-500 ease-in'>Date: <span className='text-glow'>17th October 2022</span> </p>
      </main>
    </div>    
  )
}

import Head from 'next/head'

import Greeting from '../components/Greeting'
import Time from '../components/Time'
import Date from '../components/Date'
import User from '../components/User'
import Login from '../components/Login'
import { useSession } from 'next-auth/react'

export default function Home() {
  
  const { data: session } = useSession()

  const generateRandomName = () => {

      const names = [
          'Papaya 🍐',
          'Apple 🍎',
          'Pumpkin 🎃',
          'Mushroom 🍄',
          'Tomato 🍅',
          'Cherry 🍒'
      ]

      return names[Math.floor(Math.random() * names.length)]

  }

  const name = session ? session.user.name : generateRandomName()

  return (
    <div suppressHydrationWarning >

      <Head suppressHydrationWarning>
        <title suppressHydrationWarning>My Dash - {name}</title>
      </Head>

      {
        session ? <User /> : <Login />
      }

      <main className='flex flex-col w-screen h-screen justify-center space-y-10 px-24 items-center text-center'>
        
        <Greeting name={name} />
        <Time />
        <Date />
        {/* <YearProgress /> */}

      </main>
    </div>    
  )
}

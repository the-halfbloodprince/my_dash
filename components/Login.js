import React from 'react'
import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <div onClick={() => signIn()} className='absolute right-10 top-10 border-solid border-white border-2 px-4 py-1 rounded-lg cursor-pointer'>
        Login
    </div>
  )
}

export default Login
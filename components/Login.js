import React from 'react'
import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <div onClick={() => signIn()} className='absolute left-[50vw] translate-x-[-50%] top-10 border-solid border-[#999] border-[3px] font-semibold px-5 py-2 rounded-lg cursor-pointer text-xl'>
        Login
    </div>
  )
}

export default Login
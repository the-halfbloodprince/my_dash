import React from 'react'
import { useSession } from 'next-auth/react'
import { data } from 'autoprefixer'
import Image from 'next/image'

const User = () => {
  
    const { data: session } = useSession()
  
    // console.log(session.user.image)

    return (
        <div className='rounded-full overflow-hidden absolute top-10 left-[50%] border-white translate-x-[-50%] shadow-lg shadow-purple-600'>
            {/* <img src={`${ session.user.image }`} /> */}
            <img src={`${ session.user.image }`} width={50} height={50} className='grayscale' />
        </div>
  )
}

export default User
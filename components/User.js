import React, { useRef, useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { data } from 'autoprefixer'
import Link from 'next/link'
import Image from 'next/image'
import { IoSettings, IoExit } from "react-icons/io5";

const User = () => {
  
    const { data: session } = useSession()
  
    const menuRef = useRef()

    useEffect(() => {
      
        menuRef.current.style.opacity = '0'
      
    }, [])
    

    const showMenu = () => {
        console.log(menuRef.current.style.opacity)
        menuRef.current.style.opacity = '1'
    }

    const hideMenu = () => {
        console.log(menuRef.current.style.opacity)
        menuRef.current.style.opacity = '0'
    }

    return (
        <div className='w-full h-20 absolute' onMouseEnter={showMenu} onMouseLeave={hideMenu} >
            <nav ref={menuRef} className='absolute flex w-screen justify-evenly px-10 py-10 text-xl font-medium transition-all duration-500 ease-in rounded-xl '>
                <div className='text-white cursor-pointer'>
                    <Link href={'/settings'}>
                        <div className='flex items-center space-x-2'>
                            <IoSettings color='#888' />
                            <div>Settings</div>
                        </div>
                    </Link>
                </div>
                <div className='text-red-600 cursor-pointer' onClick={() => signOut()}>
                    <div className='flex items-center space-x-2'>
                                <IoExit color='#f00' />
                            <div>Logout</div>
                        </div>
                </div>
            </nav> 
            <div className='rounded-full overflow-hidden absolute top-10 left-[50vw] border-white translate-x-[-50%] shadow-lg shadow-purple-600'>
                {/* <img src={`${ session.user.image }`} /> */}
                <img src={`${ session.user.image }`} width={50} height={50} className='grayscale' />
            </div>
        </div>
  )
}

export default User
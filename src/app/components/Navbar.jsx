'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import avatar from '@/assets/user.png';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session ,isPending} = authClient.useSession()
    const user = session?.user;
    console.log(user)


    return (
        <div className='flex items-center justify-between max-w-[85%] mx-auto py-4'>
            <div className=""></div>

            <div className=" ">
                <ul className=' flex justify-center items-center gap-5 text-gray-700 font-medium'>
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about">About</NavLink></li>
                <li><NavLink href="/career">Career</NavLink></li>
            </ul>
            </div>
        { isPending ? <span className="loading loading-spinner loading-lg"></span>


        : user ?   <div className=" flex items-center gap-4">
                <h2>{user && `Hello, ${user.name}` }</h2>
                <Image src={ user?.image || avatar} alt="User Avatar" width={40} height={40} />
                  <button className=' btn btn-primary' onClick={async()=>await authClient.signOut()}>Sign Out</button>
            </div>:
                <button className=' btn btn-primary'><Link href="/signin">Sign In</Link></button>
          }
        </div>
    );
};

export default Navbar;
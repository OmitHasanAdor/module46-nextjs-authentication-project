import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import avatar from '@/assets/user.png';
import NavLink from './NavLink';

const Navbar = () => {
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
            <div className=" flex items-center gap-4">
                <Image src={avatar} alt="User Avatar" width={40} height={40} />
                <button className=' btn btn-primary'><Link href="/signin">Sign In</Link></button>
            </div>
        </div>
    );
};

export default Navbar;
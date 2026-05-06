import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    // date fns 
    return (
        <div className=' pt-8 space-y-5 flex flex-col items-center justify-center '>
            <h2><Image src={logo} alt="Logo" className=' ' /></h2>
            <p className=" text-gray-500">Journalism Without Fear or Favour</p>
            <p className=" text-gray-500">{format(new Date(), "EEEE, LLLL dd, yyyy")}</p>
        </div>
    );
};

export default Header;
'use client'
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import facebook from '@/assets/fb.png'
import twitter from '@/assets/twitter.png'
import insta from '@/assets/instagram.png'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { authClient } from '@/lib/auth-client';


const HomeRightSide = () => {
const handleGoogleSign =async ()=>{
  const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data)
}
const handleGitHubSign =async ()=>{
  const data = await authClient.signIn.social({
        provider: "github"
    })
  console.log(data)
}
    return (
        <div className=' space-y-5'>
            <h2 className=' text-2xl font-bold'>Login With</h2>
            <div className="flex flex-col gap-4">
                <button className="btn btn-outline btn-info" onClick={handleGoogleSign}><FaGoogle />Login with Google</button>
                <button className="btn btn-outline btn-success" onClick={handleGitHubSign}><FaGithub />Login with GitHub</button>
            </div>
            <h2 className=' text-2xl font-bold'>Find Us On</h2>
            <div className="">
<ul className=''>
    <li><Link href="#" className="w-full text-center flex justify-center border-2 text-gray-400 font-bold border-gray-400  py-3 rounded-md gap-2"><Image src={facebook} alt="Facebook" /> <span>Facebook</span></Link></li>
    <li><Link href="#" className="w-full  text-center flex justify-center border-2 text-gray-400 font-bold border-gray-400 py-3 rounded-md gap-2"><Image src={twitter} alt="Twitter" />  <span>Twitter</span></Link></li>
    <li><Link href="#" className="w-full text-center flex justify-center border-2 text-gray-400 font-bold border-gray-400 py-3 rounded-md gap-2"><Image src={insta} alt="Instagram"  /> <span>Instagram</span></Link></li>
</ul>
            </div>
        </div>
    );
};

export default HomeRightSide;
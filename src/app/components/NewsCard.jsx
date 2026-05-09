import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsCard = ({newsByCategory}) => {
    // console.log(newsByCategory)
  
    // console.log(newsByCategory)
    return (
        <div className="bg-white p-4 col-span-2">
    <h2 className=" font-bold text-2xl">All News</h2>

    <div className=" space-y-5">
{
 newsByCategory.length===0? <div className='flex justify-center items-center h-screen'><p className=' text-center text-4xl text-purple-600 font-extrabold '>No news available</p></div>: newsByCategory.map(news => {
    return <div key={news._id} className=" p-3 rounded-md shadow-md ">
<div className=" flex gap-5 justify-between items-center bg-gray-100 p-3">
<div className=" flex items-center justify-start gap-3">
        <div className=""><Image src={news.author?.img} alt={news.title} width={30} height={30} className=''></Image></div>
    <div>
        <h3 className=" font-bold text-lg">{news.author.name}</h3>
        <p className=" text-gray-600">{news.author.published_date}</p>
    </div>
 
</div>
   <div className=" flex gap-5 text-gray-500">
        <span className=''><FaBookmark /></span>
        <span className=''><FaShareAlt /></span>
    </div>
</div>
<div className="">
    <h2 className=" font-bold text-2xl">{news.title}</h2>
    <Image src={news.image_url} alt={news.title} width={300} height={300} className=' w-full'></Image>
    <p className=" text-gray-500 line-clamp-3">{news.description}</p>
</div>
<div className="flex items-center justify-between py-3 gap-5 ">
  <div className="flex items-center gap-5 text-gray-500 ">
      <div className=" flex items-center gap-1"><FaStar />{news.rating.number}</div>
    <div className=" flex items-center gap-1"><FaEye />{news.total_view}</div>
  </div>
  <div>
<Link href={`/news/${news._id}`}>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">See Details</button>
</Link>
  </div>
</div>
    </div>
  })
}
  </div>
  </div>
    );
};

export default NewsCard;
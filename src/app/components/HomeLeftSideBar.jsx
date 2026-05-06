import Link from "next/link";


const HomeLeftSideBar = ({categories,activeId}) => {
    return (
       <div className="bg-white p-4 col-span-1 ">
    <h2 className="  p-2 font-bold text-3xl">All Categories</h2>

    
    <ul className="mt-4 space-y-2">
        {
       categories.news_category.map((item ,ind)=><li key={ind} className={` ${activeId ===item.category_id ? 'bg-purple-400':'bg-white' }  pl-5 hover:bg-gray-300 cursor-pointer py-2 text-2xl font-bold `}>   <Link href={`/category/${item.category_id}`} className=' block'>{item.category_name}</Link> </li>)         
      }    

    </ul>
    </div>
    );
};

export default HomeLeftSideBar;
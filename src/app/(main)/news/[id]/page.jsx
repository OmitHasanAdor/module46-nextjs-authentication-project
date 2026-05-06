import { getNewsDetails } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export async function generateMetadata({ params }) {
  const { id } = (await params)
 
  // fetch post information
 const newsDetails =await getNewsDetails(id)

 
  return {
    title: newsDetails.title,
    description: newsDetails.description,
  }
}
const NewsDetailsPage =async ({params}) => {
    const {id} =await params;
    const newsDetails =await getNewsDetails(id)
    console.log(id)

    return (
        <div className="w-lg rounded-md shadow-md my-5 mx-auto px-4 py-8">
        
            <div className=" badge badge-warning">Category #{newsDetails.category_id}</div>
            <h2 className=" font-bold text-3xl my-3">{newsDetails.title}</h2>
            <Image src={newsDetails.image_url} alt={newsDetails.title} width={600} height={600} className=" w-full rounded-md my-5" />
            <p className=" text-gray-500">{newsDetails.details}</p>
            <Link href={`/category/${newsDetails.category_id}`}>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-md w-2xs flex items-center gap-2"><FaArrowLeft/> View Category</button>
            </Link>
        </div>
    );
};

export default NewsDetailsPage;
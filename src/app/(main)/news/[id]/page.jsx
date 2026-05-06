import { getNewsDetails } from "@/lib/data";


const NewsDetailsPage =async ({params}) => {
    const {id} =await params;
    const newsDetails =await getNewsDetails(id)
    console.log(id)

    return (
        <div>
            news ca
            {/* <div className=" badge badge-warning">Category #{newsDetails.category_id}</div> */}
        </div>
    );
};

export default NewsDetailsPage;
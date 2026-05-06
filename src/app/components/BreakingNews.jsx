import Marquee from "react-fast-marquee";


const BreakingNews = () => {
    return (
        <div className=" bg-gray-200 flex items-center justify-start gap-5 py-2 px-4 mx-auto max-w-[85%]">
            <button className=" btn bg-purple-500">Latest News</button>
            <Marquee pauseOnHover={true} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nulla facilis atque rerum unde soluta eligendi consequuntur dolorum commodi incidunt. Nemo ipsum dolores obcaecati, ipsa possimus pariatur at magni, nulla tenetur, et dolorum! Doloribus impedit minus laudantium libero.
            </Marquee>
        </div>
    );
};

export default BreakingNews;
import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {

    const {data : news} = useLoaderData()
    // console.log(news);
    

    return (
        <div>
            <h1 className="font-semibold">Dragon News Home</h1>
            <p className="text-gray-400 text-sm">{news.length} News Found on this Category</p>

            <div>
                {
                    news.map(singleNews => <NewsCard news={singleNews} key={singleNews._id}></NewsCard>)
                }
            </div>

        </div>
    );
};

export default CategoryNews;
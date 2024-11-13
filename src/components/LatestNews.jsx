import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center bg-[#F3F3F3] py-4 px-4 gap-4">
            <h2 className="bg-[#D72050] text-white py-2 px-6 font-bold">Latest</h2>

            <Marquee pauseOnHover={true} className="space-x-10">

                <Link to="/news">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas illum ea similique accusantium deserunt repellat sint</Link>

                <Link to="/news">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas illum ea similique accusantium deserunt repellat sint, natus tenetur at eos culpa. Nemo ab dolorum suscipit necessitatibus quidem qui fuga laudantium!</Link>

                <Link to="/news">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas illum ea similique accusantium deserunt repellat sint, natus tenetur at eos culpa. Nemo ab dolorum suscipit necessitatibus quidem qui fuga laudantium!</Link>

                <Link to="/news">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas illum ea similique accusantium deserunt repellat sint, natus tenetur at eos culpa. Nemo ab dolorum suscipit necessitatibus quidem qui fuga laudantium!</Link>

            </Marquee>
        </div>
    );
};

export default LatestNews;

import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className="mt-6">
            <h2 className="font-semibold mb-3">Find Us On</h2>
            <div className="join flex join-vertical *:bg-white">
                <button className="btn join-item justify-start"><FaFacebookF></FaFacebookF>Facebook</button>
                <button className="btn join-item justify-start"><FaTwitter></FaTwitter>Twitter</button>
                <button className="btn join-item justify-start"><FaInstagram></FaInstagram>Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;
import { Link } from "react-router";
import logo from "../../assets/podLogo.png";
import { IoArrowBack } from "react-icons/io5";

const AttentionError = () => {
    return (
        <div className="p-6 bg-[#FCE7D3] min-h-screen ">
            <div className="max-w-6xl mx-auto">

                <img src={logo} className="h-10" alt="" />
                <div className="flex items-center gap-2 text-xl mt-5">
                    <Link to={-1}>
                    <IoArrowBack />
                    </Link>
                    <p>Attention!</p>
                </div>
                <div className="flex items-center justify-center">

                </div>
            </div>
        </div>
    )
}

export default AttentionError
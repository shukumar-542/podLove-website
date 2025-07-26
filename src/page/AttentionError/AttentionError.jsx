import { Link } from "react-router";
import logo from "../../assets/podLogo.png";
import attention from "../../assets/attention.png";
import { IoArrowBack } from "react-icons/io5";

const AttentionError = () => {
    return (
        <div className="p-6 bg-[#FCE7D3] min-h-screen ">
            <div className="max-w-6xl mx-auto h-[100%]">

                <img src={logo} className="h-10" alt="" />
                <div className="flex items-center gap-2 text-xl mt-5">
                    <Link to={-1}>
                        <IoArrowBack />
                    </Link>
                    <p>Attention!</p>
                </div>
                <div className="flex items-center justify-center flex-col h-[60vh]">
                        <img src={attention} className="h-36" alt="" />
                        <h1 className="text-3xl font-medium my-5">Attention!</h1>
                        <p className="text-center max-w-3xl">Thank you for your interest in PodLove. Based on your responses, it seems our
                            app may not be the right fit for you at this time. We appreciate
                            you exploring our platform and wish you the best in
                            finding the connections you're looking for. Feel free to
                            check back with us in the future!</p>
                </div>
            </div>
        </div>
    )
}

export default AttentionError
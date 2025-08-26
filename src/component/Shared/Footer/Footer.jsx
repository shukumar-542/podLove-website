import img from "../../../assets/footer.png";
import logo from "../../../assets/podLogo.png";
import app from "../../../assets/appStore.png";
import google from "../../../assets/googleStore.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div style={{ backgroundImage: `url(${img})` }}>
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2  border-b border-gray-200 py-10 ">
          <div>
            <img src={logo} className="h-[56px] w-[267px]" alt="" />
            <p className="mt-5 max-w-[400px] leading-7">
              PodLove believes your love story deserves a deeper introduction.
              We’re not just an app. We’re a platform for genuine human
              connection.
            </p>
            {/* <p className="text-xl font-bold my-5">E-mail</p>
            <p>Email: mstkhushiakter333@gmail.com</p> */}
          </div>
          <div className=" md:mx-auto space-y-4">
            {/* <h1 className="text-2xl font-bold mb-10">Company Links</h1> */}
            <p className="mb-1">
              <Link to={"/about-us"} className="mb-2">
                About Us
              </Link>
            </p>
            <p className="mb-1">
              <Link to={"/contact-us"} className="mb-2">
                Contact Us
              </Link>
            </p>
            <p className="mb-2">
              <Link to={"/privacy-policy"}>Privacy Policy</Link>
            </p>
            <p className="mb-2">
              <Link to={"/terms-and-conditions"}>Terms And Conditions</Link>
            </p>
            <p>
              <Link to={"/opt-in-policy"}>SMS Consent & Opt-In-Policy</Link>
            </p>
          </div>
        </div>
        <div className="my-10 md:flex  justify-between items-center">
          <p>All Rights Reserved. Copyright © 2025 podLove </p>
          <div className="flex gap-4 ">
            <img src={app} className="h-[44px] w-[150px]" alt="" />
            <img src={google} className="h-[44px] w-[150px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

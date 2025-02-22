import React from "react";
import img from "../../assets/footLove.png";
import img1 from "../../assets/podLogo.png";
import { NavLink } from "react-router";
import { IoMdNotifications } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="h-28 " style={{ backgroundImage: `url(${img})` }}>
      <div className="container mx-auto  h-full flex items-center justify-between">
        <div>
          <img className="h-16 " src={img1} alt="" />
        </div>
        <div className="space-x-5">
          <NavLink to={"/home"}>Home</NavLink>
          <NavLink to={"/about-us"}>About us</NavLink>
          <NavLink to={"/contact-us"}>Contact us</NavLink>
          <NavLink to={"/feedback-first-step"}>Feedback</NavLink>
        </div>
        <div className="space-x-5 flex items-center">
          <NavLink to={"/notification"} className={"bg-[#FFA175] rounded-full p-1"}>
            <IoMdNotifications size={20} color="white" />
          </NavLink>
          <NavLink to={"/login"}>Login</NavLink>
          <button>Sign Up Here</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

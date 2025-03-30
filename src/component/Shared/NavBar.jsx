import React, { useState } from "react";
import img from "../../assets/footLove.png";
import img1 from "../../assets/podLogo.png";
import { Link, NavLink } from "react-router";
import { IoMdNotifications } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi"; 
import { useGetUserQuery } from "../../redux/Api/AuthApi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data :  getUser} = useGetUserQuery()


  return (
    <div className="h-28 bg-cover  bg-center" style={{ backgroundImage: `url(${img})` }}>
      <div className="container mx-auto h-full flex items-center justify-between px-4 md:px-8">
        
        {/* Logo */}
        <div>
          <img className="h-16 " src={img1} alt="Logo" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden " onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-5">
          {
            getUser?.data  && <NavLink to="/home" className="hover:text-[#FFA175]">Home</NavLink>
          }
          
          <NavLink to="/about-us" className="hover:text-[#FFA175]">About us</NavLink>
          <NavLink to="/contact-us" className="hover:text-[#FFA175]">Contact us</NavLink>
          <NavLink to="/feedback-first-step" className="hover:text-[#FFA175]">Feedback</NavLink>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex space-x-5 items-center">
          <NavLink to="/notification" className="bg-[#FFA175] rounded-full p-1">
            <IoMdNotifications size={20} color="white" />
          </NavLink>
          {
            getUser?.data ? <Link to={"/profile"}><img src={getUser?.data?.avatar} className="h-10 shadow-2xl object-cover w-10 rounded-full border border-[#FFA175] cursor-pointer" alt="" /></Link> : <NavLink to="/login" className="hover:text-[#FFA175]">Login</NavLink>
          }
          {
            !getUser?.data && <button className="bg-[#FFA175] text-white px-4 py-1 rounded">Sign Up Here</button>
          } 
          
          
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
        <button className="absolute top-5 right-5 text-gray-800" onClick={() => setMenuOpen(false)}>
          <HiX size={28} />
        </button>
        <NavLink to="/home" onClick={() => setMenuOpen(false)} className="text-xl py-2">Home</NavLink>
        <NavLink to="/about-us" onClick={() => setMenuOpen(false)} className="text-xl py-2">About us</NavLink>
        <NavLink to="/contact-us" onClick={() => setMenuOpen(false)} className="text-xl py-2">Contact us</NavLink>
        <NavLink to="/feedback-first-step" onClick={() => setMenuOpen(false)} className="text-xl py-2">Feedback</NavLink>
        <NavLink to="/notification" onClick={() => setMenuOpen(false)} className="bg-[#FFA175] rounded-full p-2 mt-4">
          <IoMdNotifications size={24} color="white" />
        </NavLink>
        <NavLink to="/login" onClick={() => setMenuOpen(false)} className="text-xl py-2 mt-2">Login</NavLink>
        <button className="bg-[#FFA175] text-white px-6 py-2 rounded mt-4" onClick={() => setMenuOpen(false)}>Sign Up Here</button>
      </div>
    </div>
  );
};

export default NavBar;

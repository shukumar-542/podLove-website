import { useState } from "react";
import img from "../../assets/Footlove.png";
import img1 from "../../assets/podLogo.png";
import { Link, NavLink } from "react-router";
import { IoMdNotifications } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import { useGetUserQuery } from "../../redux/Api/AuthApi";
import { baseUrl } from "../../baseUrl";
import play_store from '../../assets/play_store.png'
import apple_store from '../../assets/apple_store.png'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: getUser } = useGetUserQuery()
  console.log('from header', getUser);
  const logInUser = localStorage.getItem("podlove-token")

  return (
    <div className="h-20 bg-cover  bg-center" style={{ backgroundImage: `url(${img})` }}>
      <div className="container mx-auto h-full flex items-center justify-between px-4 md:px-8">

        {/* Logo */}
        <div>
          <NavLink to={"/"}><img className="h-8 md:h-10 " src={img1} alt="Logo" /></NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden " onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={28} /> : <div className=" flex items-center gap-3">
            <img src={apple_store} className=" w-8 cursor-pointer" alt="" />
            <img src={play_store} className=" w-8 cursor-pointer mr-3" alt="" />
            <HiMenu size={28}></HiMenu>
          </div>
          }
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-3 xl:space-x-8">
          {
            logInUser && <NavLink to="/home" className="hover:text-[#FFA175]">Home</NavLink>
          }
          {
            !logInUser && <NavLink to="/" className="hover:text-[#FFA175]">Home</NavLink>
          }

          <NavLink to="/about-us" className="hover:text-[#FFA175]">About us</NavLink>
          <NavLink to="/subscription-page" className="hover:text-[#FFA175]">Subscriptions</NavLink>
          <NavLink to="/contact-us" className="hover:text-[#FFA175]">Contact us</NavLink>
          <NavLink to="/feedback-first-step" className="hover:text-[#FFA175]">Feedback</NavLink>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex space-x-3 xl:space-x-5 items-center">
          <img src={apple_store} className=" w-12 cursor-pointer" alt="" />
          <img src={play_store} className=" w-12 cursor-pointer" alt="" />
          {
            logInUser &&
            <NavLink to="/notification" className="bg-[#FFA175] rounded-full p-2">
              <IoMdNotifications size={25} color="white" />
            </NavLink>
          }

          {
            logInUser ? <Link to={"/profile"}><img src={`${baseUrl}${getUser?.data?.avatar}`} className="h-10 shadow-2xl object-cover w-10 rounded-full border border-[#FFA175] cursor-pointer" alt="" /></Link> : <NavLink to="/login" className="hover:text-[#FFA175]">Login</NavLink>
          }
          {
            // !logInUser && <Link to={"/sign-up"} className="bg-[#FFA175] text-white px-4 py-1 rounded">Sign Up Here</Link>
            !logInUser && <Link to={"/connection-pathway"} className="bg-[#FFA175] text-white px-4 py-1 rounded">Sign Up Here</Link>
          }
        </div>

      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
        <button className="absolute top-5 right-5 text-gray-800" onClick={() => setMenuOpen(false)}>
          <HiX size={28} />
        </button>
        {
          logInUser && <NavLink to="/home" onClick={() => setMenuOpen(false)} className="text-xl py-2">Home</NavLink>
        }
        {
          !logInUser && <NavLink to="/" onClick={() => setMenuOpen(false)} className="text-xl py-2">Home</NavLink>
        }

        <NavLink to="/subscription-plan" onClick={() => setMenuOpen(false)} className="text-xl py-2">Subscriptions</NavLink>
        <NavLink to="/about-us" onClick={() => setMenuOpen(false)} className="text-xl py-2">About us</NavLink>
        <NavLink to="/contact-us" onClick={() => setMenuOpen(false)} className="text-xl py-2">Contact us</NavLink>
        <NavLink to="/feedback-first-step" onClick={() => setMenuOpen(false)} className="text-xl py-2">Feedback</NavLink>
        {
          logInUser ? <Link to={"/profile"}  onClick={() => setMenuOpen(false)}><img src={`${baseUrl}${getUser?.data?.avatar}`} className="h-10 shadow-2xl object-cover w-10 rounded-full border border-[#FFA175] cursor-pointer" alt="" /></Link> : <NavLink to="/login" onClick={() => setMenuOpen(false)} className="text-xl py-2 mt-2">Login</NavLink>
        }
        <NavLink to="/notification" onClick={() => setMenuOpen(false)} className="bg-[#FFA175] rounded-full p-2 mt-4">
          <IoMdNotifications size={24} color="white" />
        </NavLink>

        {/* <NavLink to={"/signup"} className="bg-[#FFA175] text-white px-6 py-2 rounded mt-4" onClick={() => setMenuOpen(false)}>Sign Up Here</NavLink> */}
        <NavLink to={"/connection-pathway"} className="bg-[#FFA175] text-white px-6 py-2 rounded mt-4" onClick={() => setMenuOpen(false)}>Sign Up Here</NavLink>
      </div>
    </div>
  );
};

export default NavBar;

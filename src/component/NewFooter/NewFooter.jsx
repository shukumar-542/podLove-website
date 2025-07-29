import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { LuDot, LuPhone } from "react-icons/lu";

const NewFooter = () => {
  return (
    <div className="bg-[#FBF3F8]">
      <div className="container mx-auto py-10 border-b border-[#D1D5DB]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-10">
          <div>
            <p>Korean Shop</p>
            <p>Bangladesh</p>
            <p>
              Real beauty starts truly with your skin and skin Improves
              Confidence.
            </p>
          </div>
          <div>
            <p className="text-xl font-medium mb-4">Popular Category</p>
            <div className="space-y-2 text-[18px]">
                <p className="flex items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "><LuDot /> Home</p>
                <p className="flex items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "><LuDot /> Product</p>
                <p className="flex items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "><LuDot /> Blogs</p>
                <p className="flex items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "><LuDot /> Sitemap</p>
                <p className="flex items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "><LuDot /> FAQ</p>
            </div>
          </div>
          <div>
            <p className="text-xl font-medium mb-4">Customer Service</p>
             <div className="space-y-2 text-[18px]">
                <p className="flex items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "><LuDot /> About Us</p>
                <p className="flex items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "><LuDot /> Contact Us</p>
                <p className="flex items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "><LuDot /> Return & Refund</p>
                <p className="flex items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "><LuDot /> Shipping & Delivery</p>
                <p className="flex items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "><LuDot /> Store Location</p>
            </div>
          </div>
          <div>
            <p className="text-xl font-medium mb-4">Contact Us</p>
            <div className="space-y-2 text-[18px]">
                <p className="flex gap-2 items-center"><LuPhone /><span className=" cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "> 01303-779646</span></p>
                <p className="flex gap-2 items-center"><HiOutlineMail /><span className=" cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "> Koreanshop@gmail.com</span></p>
                <p className="flex gap-2 items-center"><FaLocationDot /><span className=" cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "> Rampura, Banasree, Dhaka</span></p>
             
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-5 flex items-center justify-between">
        <p>© 2025 All right reserved</p>
        <div className="flex items-center gap-2">
          <p className="flex border-r-2 p-2  items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 ">Terms and conditions</p>
          <p className="flex items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 ">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default NewFooter;

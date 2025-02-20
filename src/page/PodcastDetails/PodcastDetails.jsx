import React from "react";
import point from '../../assets/handPoint.png'
const PodcastDetails = () => {
  return (
    <div className="bg-[#F7E8E1] h-full w-full">
      <div className="container mx-auto ">
        
        <div className="flex flex-col justify-center items-center py-10 ">
           <div className="rounded-md overflow-hidden font-poppins shadow-2xl">
                <div className="bg-red-500 text-white flex items-center justify-between p-4">
                    <p className="text-7xl  font-bold mr-10">JUL</p>
                    <div>
                        <p>Sunday</p>
                        <p>4 pm</p>
                    </div>
                </div>
                <div className="bg-[#E0E7EC] text-center p-4">
                    <p className="text-[90px] font-extrabold text-[#66757F]">17</p>
                </div>
           </div>
        </div>


        <p className="text-[#67362A] text-2xl font-poppins font-bold">REMEMBER</p>
        <div className="py-10 space-y-6">
            <div className="flex items-center gap-5">
                <img src={point} className="h-12 w-12" alt="" />
                <p className="text-[#333333]">Relax and be yourself</p>
            </div>
            <div className="flex items-center gap-5">
                <img src={point} className="h-12 w-12" alt="" />
                <p className="text-[#333333]">Have a quite space with good lighting and stable internet connection</p>
            </div>
            <div className="flex items-center gap-5">
                <img src={point} className="h-12 w-12" alt="" />
                <p className="text-[#333333]">The host will guide you through the process</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastDetails;

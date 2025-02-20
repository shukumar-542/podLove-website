import React from "react";
import img1 from "../../assets/match.png";
import img2 from "../../assets/match2.png";
import img3 from "../../assets/match3.png";
import img4 from "../../assets/match4.png";
import sh from "../../assets/shooo.png";
import { Link } from "react-router";
import video from "../../assets/schedule.mp4";
import mic from "../../assets/mic.png";
import Pricing from "../../component/Pricing/Pricing";

const AfterPodcast = () => {
  return (
    <div className="bg-[#f7e8e1]">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-between items-center gap-10">
          <Link to={"/podcast-details/:id"}>
            <div className="cursor-pointer hover:shadow-2xl rounded-br-3xl">
              <img src={sh} className="w-full z-0 " alt="" />
              <div className="text-center bg-white py-5 border border-[#FFA175] rounded-md  -mt-2 z-5">
                <p>Eleanor Pena</p>
              </div>
            </div>
            <div className="text-center bg-[#FFA175] mt-5 text-white py-5 rounded-tl-3xl rounded-br-3xl">
              <p className="text-xl">Chat</p>
            </div>
          </Link>
          <div>
            <div className="cursor-pointer hover:shadow-2xl rounded-br-3xl ">
              <img src={img2} className="w-full" alt="" />
            </div>
            <div className="text-center bg-[#C0C0C0] mt-5 text-white py-5 rounded-tl-3xl rounded-br-3xl">
              <p className="text-xl">Chat</p>
            </div>
          </div>
          <div>
            <div className="cursor-pointer hover:shadow-2xl rounded-br-3xl ">
              <img src={img3} className="w-full" alt="" />
            </div>
            <div className="text-center bg-[#C0C0C0] mt-5 text-white py-5 rounded-tl-3xl rounded-br-3xl">
                <p className="text-xl">Chat</p>
            </div>
          </div>
         <div>
         <div className="cursor-pointer hover:shadow-2xl rounded-br-3xl">
            <img src={img4} className="w-full" alt="" />
          </div>
          <div className="text-center bg-[#C0C0C0] mt-5 text-white py-5 rounded-tl-3xl rounded-br-3xl">
                <p className="text-xl">Chat</p>
            </div>
         </div>
        </div>


            {/* Date and time schedule section */}
                <section className="my-20  relative">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-[500px]  mx-auto rounded-md  "
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 h-auto">
                    <img src={mic} alt="Microphone" className="w-24 h-24 mx-auto " />
                    <h1 className="text-4xl font-poppins text-white">Date & Time : </h1>
                    <p className="text-white text-center text-xl mt-2">
                      12/07/24 (Monday) at 4 PM
                    </p>
                    <button className="bg-[#F68064] w-full mt-2 py-2 rounded-md">
                      Join
                    </button>
                  </div>
                </section>
        

            <Pricing/>

      </div>
    </div>
  );
};

export default AfterPodcast;

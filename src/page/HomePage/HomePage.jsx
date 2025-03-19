import React from "react";
import img1 from "../../assets/match.png";
import img2 from "../../assets/match2.png";
import img3 from "../../assets/match3.png";
import img4 from "../../assets/match4.png";
import video from "../../assets/schedule.mp4";
import mic from "../../assets/mic.png";
import IsPodSafe from "../../component/IsPodSafe/IsPodSafe";
import { Link, useNavigate } from "react-router";
import Pricing from "../../component/Pricing/Pricing";
import { useGetPodCastDetailsQuery } from "../../redux/Api/AuthApi";
import { toast } from "sonner";
const HomePage = () => {
  const navigate = useNavigate()
  const { data: getPodcastDetails } = useGetPodCastDetailsQuery();
  // console.log(getPodcastDetails?.data?.podcast?._id);
const handleVideoCall = ()=>{
  if(!getPodcastDetails?.data?.podcast?._id){
    toast.error("Podcast not available!")
  }
  navigate(`/room/${getPodcastDetails?.data?.podcast?._id}`)
}
  return (
    <div className="bg-[#F7E8E1]">
      <div className="container mx-auto">
        <p className="font-poppins font-bold text-2xl py-5">Your Matches</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-between items-center gap-10">
          {getPodcastDetails?.data?.podcast?.participants?.map(
            (participant) => {
              return (
                <Link key={participant?._id} to={"/podcast-details/:id"}>
                  <div className="cursor-pointer hover:shadow-2xl rounded-br-3xl">
                    <img src={img1} className="w-full" alt="" />
                  </div>
                </Link>
              );
            }
          )}

          {/* <div className="cursor-pointer hover:shadow-2xl rounded-br-3xl ">
            <img src={img2} className="w-full" alt="" />
          </div>
          <div className="cursor-pointer hover:shadow-2xl rounded-br-3xl ">
            <img src={img3} className="w-full" alt="" />
          </div>
          <div className="cursor-pointer hover:shadow-2xl rounded-br-3xl">
            <img src={img4} className="w-full" alt="" />
          </div> */}
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
            <button onClick={()=> handleVideoCall()} className="bg-[#F68064] w-full mt-2 py-2 rounded-md">
              Join
            </button>
          </div>
        </section>

        <h1 className="text-center font-bold text-2xl">Subscription Plan</h1>

        {/* Subscription Plan Section */}
        <Pricing />
      </div>
      <IsPodSafe />
    </div>
  );
};

export default HomePage;

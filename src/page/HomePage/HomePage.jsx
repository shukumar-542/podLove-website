import React from "react";
import img1 from "../../assets/match.png";
import img2 from "../../assets/match2.png";
import img3 from "../../assets/match3.png";
import img4 from "../../assets/match4.png";
import video from "../../assets/schedule.mp4";
import mic from "../../assets/mic.png";
import subscription from "../../assets/subscription-bg.png";
import IsPodSafe from "../../component/IsPodSafe/IsPodSafe";
import { IoCheckmarkOutline } from "react-icons/io5";
import { Divider } from "antd";
const HomePage = () => {
  return (
    <div className="bg-[#F7E8E1]">
      <div className="container mx-auto">
        <p className="font-poppins font-bold text-2xl py-5">Your Matches</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-between items-center">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
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

        <h1 className="text-center font-bold text-2xl">Subscription Plan</h1>

        {/* Subscription Plan Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20  mx-auto font-poppins mr-2 md:mr-0 ml-2 md:ml-0 ">
          {/* Subscription Free */}
          <div
            style={{
              backgroundImage: `url(${subscription})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
            }}
            className="rounded-md text-white p-4 py-8 shadow-2xl shadow-black"
          >
            <p className="text-center bg-[#231A19] text-[20px] py-2  rounded-full max-w-[120px]  mx-auto">
              Listener
            </p>

            <p className=" my-2 mt-10 ">Connection Starter</p>

            <div className="space-y-2 pb-5 mt-5">
              <p className="flex items-center gap-2 font-thin">
                <IoCheckmarkOutline size={16} color="#FFA175" />
                Meet 2 Matches
              </p>
              <p className="flex items-center gap-2 font-thin">
                <IoCheckmarkOutline size={16} color="#FFA175" />
                Podcast Participation
              </p>
              <p className="flex items-center gap-2 font-thin">
                <IoCheckmarkOutline size={16} color="#FFA175" />
                72 Hours Chat Access
              </p>
              <p className="flex items-center gap-2 font-thin">
                <IoCheckmarkOutline size={16} color="#FFA175" />
                Podcast Exposure
              </p>
            </div>
            <h1 className=" text-3xl font-bold my-5">Free</h1>
            <div className="text-center">
              <button className="border text-[#FFA175]  max-w-xs rounded-full w-full mt-5 py-2 border-[#FFA175] mb-5">
                Current Plan
              </button>
            </div>
            <Divider
              style={{
                borderColor: "#2D2D30",
              }}
            >
              Details
            </Divider>

            <div className="space-y-3 ">
              <p className="flex items-center gap-2 font-poppins text-[13px]">
                <IoCheckmarkOutline size={20} color="" />
                Podcast Participation: Meet two matches and be featured in two
                podcast episodes.
              </p>
              <p className="flex items-center gap-2 font-poppins text-[13px]">
                <IoCheckmarkOutline size={20} color="" />
                Chat Access: Communicate with your chosen match for up to 72
                hours after the podcast.
              </p>
              <p className="flex items-center gap-2 font-poppins text-[13px]">
                <IoCheckmarkOutline size={20} color="" />
                Podcast Exposure: Gain visibility and enjoy an engaging
                introduction to the PodLove platform.
              </p>
            </div>
          </div>
          {/* Subscription per month */}
          <div
            style={{
              backgroundImage: `url(${subscription})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
            }}
            className="rounded-md text-white p-4 py-8 shadow-2xl shadow-black"
          >
            <p className="text-center bg-[#231A19] text-[20px] py-2  rounded-full max-w-[120px]  mx-auto">
              Speaker
            </p>

            <p className=" my-2 mt-10 ">Conversion Explorer</p>

            <div className="space-y-2 pb-5 mt-5">
              <p className="flex items-center gap-2 font-thin">
                <IoCheckmarkOutline size={16} color="#FFA175" />
                Meet 3 Matches
              </p>
              <p className="flex items-center gap-2 font-thin">
                <IoCheckmarkOutline size={16} color="#FFA175" />
                Extended Chat
              </p>
              <p className="flex items-center gap-2 font-thin">
                <IoCheckmarkOutline size={16} color="#FFA175" />
                Second Chance
              </p>
              <p className="flex items-center gap-2 font-thin">
                <IoCheckmarkOutline size={16} color="#FFA175" />
                Exclusive Content
              </p>
            </div>
            <h1 className=" text-3xl font-bold my-5">$14.99/month</h1>
            <div className=" text-center">
              <button className=" bg-gradient-to-r from-[#F36E2F] to-[#FEB491]  shadow-white shadow-inner rounded-full w-full mt-5 py-2 max-w-xs  mb-5">
                Current Plan
              </button>
            </div>
            <Divider
              style={{
                borderColor: "#2D2D30",
              }}
            >
              Details
            </Divider>

            <div className="space-y-3 ">
              <p className="flex items-center gap-2 font-poppins text-[13px]">
                <IoCheckmarkOutline size={20} color="" />
                Podcast Participation: Meet two matches and be featured in two
                podcast episodes.
              </p>
              <p className="flex items-center gap-2 font-poppins text-[13px]">
                <IoCheckmarkOutline size={20} color="" />
                Chat Access: Communicate with your chosen match for up to 72
                hours after the podcast.
              </p>
              <p className="flex items-center gap-2 font-poppins text-[13px]">
                <IoCheckmarkOutline size={20} color="" />
                Podcast Exposure: Gain visibility and enjoy an engaging
                introduction to the PodLove platform.
              </p>
            </div>
          </div>
          {/* Subscription per year */}
          <div
            style={{
              backgroundImage: `url(${subscription})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
            }}
            className="rounded-md text-white p-4 py-8 shadow-2xl shadow-black"
          >
            <p className="text-center bg-[#231A19] text-[20px] py-2  rounded-full max-w-[120px]  mx-auto">
              Seeker
            </p>

            <p className=" my-2 mt-10 ">Conversion Explorer</p>

            <div className="space-y-2 pb-5 mt-5">
              <p className="flex items-center gap-2 font-thin">
                <IoCheckmarkOutline size={16} color="#FFA175" />
                Meet 4 Matches
              </p>
              <p className="flex items-center gap-2 font-thin">
                <IoCheckmarkOutline size={16} color="#FFA175" />
                Match Refresh
              </p>
              <p className="flex items-center gap-2 font-thin">
                <IoCheckmarkOutline size={16} color="#FFA175" />
                Unlimited Chat & Bios Access
              </p>
              <p className="flex items-center gap-2 font-thin">
                <IoCheckmarkOutline size={16} color="#FFA175" />
                Event Perks & Merch Discount
              </p>
            </div>
            <h1 className=" text-3xl font-bold my-5">$29.99/month</h1>
            <div className=" text-center">
              <button className=" bg-gradient-to-r from-[#F36E2F] to-[#FEB491]  shadow-white shadow-inner rounded-full w-full mt-5 py-2 max-w-xs  mb-5">
                Choose this Plan
              </button>
            </div>
            <Divider
              style={{
                borderColor: "#2D2D30",
              }}
            >
              Details
            </Divider>

            <div className="space-y-3 ">
              <p className="flex items-center gap-2 font-poppins text-[13px]">
                <IoCheckmarkOutline size={20} color="" />
                More Matches: Meet three matches instead of two.
              </p>
              <p className="flex items-center gap-2 font-poppins text-[13px]">
                <IoCheckmarkOutline size={20} color="" />
                Extended Chat: Access chat with your match for up to one week.
              </p>
              <p className="flex items-center gap-2 font-poppins text-[13px]">
                <IoCheckmarkOutline size={20} color="" />
                Second Chance: Users can be matched again if their first match
                doesn't work out, providing another chance at connection
              </p>
              <p className="flex items-center gap-2 font-poppins text-[13px]">
                <IoCheckmarkOutline size={20} color="" />
                Exclusive Content: Access to curated dating tips, insights, and
                advice not available to free-tier users.
              </p>
            </div>
          </div>
        </section>
      </div>
      <IsPodSafe />
    </div>
  );
};

export default HomePage;

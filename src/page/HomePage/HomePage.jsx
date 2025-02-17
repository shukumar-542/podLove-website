import React from "react";
import img1 from "../../assets/match.png";
import img2 from "../../assets/match2.png";
import img3 from "../../assets/match3.png";
import img4 from "../../assets/match4.png";
import video from "../../assets/schedule.mp4";
import mic from "../../assets/mic.png";
import IsPodSafe from "../../component/IsPodSafe/IsPodSafe";
import { IoCheckmarkOutline } from "react-icons/io5";
const HomePage = () => {
  return (
    <div className="bg-[#F7E8E1]">
      <div className="container mx-auto">
        <p className="font-poppins font-bold text-2xl py-5">Your Matches</p>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-between items-center">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
        {/* Date and time schedule section */}
        <section className="my-20 h-[50%] relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-[500px] mx-auto rounded-md relative "
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

        {/* Subscription Plan Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20 max-w-4xl mx-auto font-poppins">
            <div className="bg-white rounded-lg shadow-md p-4 hover:bg-[#FCD8CF] transition-all duration-150 hover:shadow-lg">
                <p className="text-center text-[20px] border-b border-[#FFA175] max-w-[85px] mx-auto">Listener</p>
                <p className="text-center my-2 text-[#FFA175] text-xl">Connection Starter</p>
                <h1 className="text-[#2757A6] text-center text-3xl font-bold my-10">Free</h1>
                <div className="space-y-5 pb-10 pl-5">
                    <p className="flex items-center gap-2 font-thin"><IoCheckmarkOutline size={20} color="#FFA175" />Meet 2 Matches</p>
                    <p className="flex items-center gap-2 font-thin"><IoCheckmarkOutline size={20} color="#FFA175" />Podcast Participation</p>
                    <p className="flex items-center gap-2 font-thin"><IoCheckmarkOutline size={20} color="#FFA175" />72 Hours Chat Access</p>
                    <p className="flex items-center gap-2 font-thin"><IoCheckmarkOutline size={20} color="#FFA175" />Podcast Exposure</p>
                </div>
                <p className="text-center text-[#2757A6] cursor-pointer font-semibold">View Details</p>
                <button className="border text-[#FFA175] rounded-full w-full mt-5 py-2 border-[#FFA175]">Current Plan</button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 hover:bg-[#FCD8CF] transition-all duration-150 hover:shadow-lg">
                <p className="text-center text-[20px] border-b border-[#FFA175] max-w-[85px] mx-auto">Speaker</p>
                <p className="text-center my-2 text-[#FFA175] text-xl">Conversational Explorer</p>
                <h1 className="text-[#2757A6] text-center text-3xl font-bold my-10">$14.99/ month</h1>
                <div className="space-y-5 pb-10 pl-5">
                    <p className="flex items-center gap-2 font-thin"><IoCheckmarkOutline size={20} color="#FFA175" />Meet 3 Matches</p>
                    <p className="flex items-center gap-2 font-thin"><IoCheckmarkOutline size={20} color="#FFA175" />Extend Chat</p>
                    <p className="flex items-center gap-2 font-thin"><IoCheckmarkOutline size={20} color="#FFA175" />Second Chance</p>
                    <p className="flex items-center gap-2 font-thin"><IoCheckmarkOutline size={20} color="#FFA175" />Exclusive Content</p>
                </div>
                <p className="text-center text-[#2757A6] cursor-pointer font-semibold">View Details</p>
                <button className="border text-white rounded-full w-full mt-5 py-2 bg-[#FFA175]">Purchase</button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-2 hover:bg-[#FCD8CF] transition-all duration-150 hover:shadow-lg">
                <p className="text-center text-[20px] border-b border-[#FFA175] max-w-[85px] mx-auto">Listener</p>
                <p className="text-center my-2 text-[#FFA175] text-xl">Connection Starter</p>
                <h1 className="text-[#2757A6] text-center text-3xl font-bold my-10">$29.99/ month</h1>
                <div className="space-y-5 pb-10 pl-5">
                    <p className="flex items-center gap-2 font-thin"><IoCheckmarkOutline size={20} color="#FFA175" />Meet 4 Matches</p>
                    <p className="flex items-center gap-2 font-thin"><IoCheckmarkOutline size={20} color="#FFA175" />Match Refresh</p>
                    <p className="flex items-center text-sm gap-2 font-thin"><IoCheckmarkOutline size={20} color="#FFA175" />Unlimited chat & Bios Access</p>
                    <p className="flex items-center text-sm gap-2 font-thin"><IoCheckmarkOutline size={20} color="#FFA175" />Event Perks & merch discount</p>
                </div>
                <p className="text-center text-[#2757A6] cursor-pointer font-semibold mt-3">View Details</p>
                <button className="border text-white rounded-full w-full mt-5 py-2 bg-[#FFA175]">Purchase</button>
            </div>
           
        </section>
      </div>
      <IsPodSafe/>
    </div>
  );
};

export default HomePage;

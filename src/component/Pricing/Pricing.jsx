import React from "react";
import subscription from "../../assets/subscription-bg.png"
import { IoCheckmarkOutline } from "react-icons/io5";
import { Divider } from "antd";
const Pricing = () => {
  return (
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
            Chat Access: Communicate with your chosen match for up to 72 hours
            after the podcast.
          </p>
          <p className="flex items-center gap-2 font-poppins text-[13px]">
            <IoCheckmarkOutline size={20} color="" />
            Podcast Exposure: Gain visibility and enjoy an engaging introduction
            to the PodLove platform.
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
            Chat Access: Communicate with your chosen match for up to 72 hours
            after the podcast.
          </p>
          <p className="flex items-center gap-2 font-poppins text-[13px]">
            <IoCheckmarkOutline size={20} color="" />
            Podcast Exposure: Gain visibility and enjoy an engaging introduction
            to the PodLove platform.
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
  );
};

export default Pricing;

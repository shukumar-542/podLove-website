import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

const OptInPolicy = () => {
  return (
    <div className="bg-[#F7E8E1]">
      <div className="container mx-auto">
        <div className="bg-[#FFA175] p-4">
          <p className="text-black text-4xl font-bold">SMS Consent &</p>
          <p className="text-white text-4xl font-bold mt-4">Opt -in Policy</p>
          <p className="text-[#6B4431] text-4xl font-bold mt-8">
            Welcome to PodLove!
          </p>
        </div>
        <p className="text-xl mt-10">
          At PodLove, we respect your privacy and ensure that all SMS
          communications comply with industry regulations. Below is our SMS
          consent policy:
        </p>
        <p className="text-3xl font-bold text-[#6B4431] mt-10">How Users Opt-In</p>
        <p className="text-xl mt-5">By signing up for PodLove through our mobile app, users provide explicit consent to receive SMS updates regarding:</p>

        <p className="flex items-center mt-5 gap-2"><IoCheckmarkOutline size={20} className="bg-[#FFA175] text-white rounded-sm" /><span className="text-xl">Podcast invitations</span></p>
        <p className="flex items-center mt-5 gap-2"><IoCheckmarkOutline size={20} className="bg-[#FFA175] text-white rounded-sm" /><span className="text-xl">Match notifications</span></p>
        <p className="flex items-center mt-5 gap-2"><IoCheckmarkOutline size={20} className="bg-[#FFA175] text-white rounded-sm" /><span className="text-xl">Important updates about their PodLove experience</span></p>

        <p className="text-[#6B4431] mt-10 text-3xl font-bold">Types of Messages Users Receive</p>
        <p className="text-xl mt-2 font-semibold">Users who opt-in may receive:</p>

        <p className="flex items-center mt-5 gap-2"><IoCheckmarkOutline size={20} className="bg-[#FFA175] text-white rounded-sm" /><span className="text-xl"> Match Notifications – Stay updated on new matches.</span></p>
        <p className="flex items-center mt-5 gap-2"><IoCheckmarkOutline size={20} className="bg-[#FFA175] text-white rounded-sm" /><span className="text-xl"> Podcast Participation Details – Get information about upcoming podcast sessions.</span></p>
        <p className="flex items-center mt-5 gap-2"><IoCheckmarkOutline size={20} className="bg-[#FFA175] text-white rounded-sm" /><span className="text-xl"> PodLove Updates – Receive important news about the platform.</span></p>

        <p className="text-[#6B4431] mt-10 text-3xl font-bold">How to Opt-Out</p>
        <p className="mt-5 text-xl pb-10">Users can opt out of SMS communications at any time by replying "STOP" to any message. For any questions or concerns, please contact us at support@podlove.co.</p>
      </div>
    </div>
  );
};

export default OptInPolicy;

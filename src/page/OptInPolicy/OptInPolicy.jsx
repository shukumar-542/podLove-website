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

        <p className="text-[#6B4431] mt-10 text-3xl font-bold">Steps to Resolve the Issue</p>
        <p className="mt-5 text-xl">Add a step-by-step explanation of how users opt-in.  
        </p>
        <p className=" text-xl pb-10">Include screenshots or examples of checkboxes/buttons where they agreereceive messages.</p>
        
        <p className="text-[#6B4431] mt-10 text-3xl font-bold">Ensure Clear Consent Collection</p>
        <p className="mt-5 text-xl">Twilio prefers explicit consent (e.g., users checking a box that says “I agree to receive SMS notifications from PodLove”).    
        </p>
        <p className=" text-xl pb-10"> If opt-in happens during app signup, show a screenshot or describe how they give consent.  
        </p>
        
        <p className="text-[#6B4431] mt-5 text-3xl font-bold">Resubmit with a Better Link</p>
        <p className="mt-5 text-xl">Instead of just linking to a general privacy page, create a dedicated page like: </p>
        <p className=" text-xl"> https://podlove.co/sms-opt-in</p>
        <p className=" text-xl">Make sure it *visibly demonstrates* the opt-in process.</p>



        <p className="text-[#6B4431] mt-5 text-3xl font-bold">Example of What Twilio Wants to See on Your Page</p>
        <p className="mt-5 text-xl">- A heading like *"How We Collect SMS Opt-In"*  </p>
        <p className=" text-xl"> - A step-by-step explanation: </p>
        <p className=" text-xl">  1. Users sign up via the PodLove app or website.</p>
        <p className=" text-xl">  2. They check a box that says *"I agree to receive SMS updates about my matches and podcast invites."* </p>
        <p className=" text-xl">  3. They receive an initial confirmation SMS to verify their consent.</p>
        <p className=" text-xl"> - Screenshots of the app signup page with the checkbox for SMS consent.  </p>
        




        <p className="text-[#6B4431] mt-10 text-3xl font-bold">How to Opt-Out</p>
        <p className="mt-5 text-xl pb-10">Users can opt out of SMS communications at any time by replying "STOP" to any message. For any questions or concerns, please contact us at support@podlove.co.</p>
      </div>
    </div>
  );
};

export default OptInPolicy;

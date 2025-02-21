import React from "react";
import bg from "../../assets/b.png";
import profile from "../../assets/profile.png";
import { CiLocationOn } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
const Profile = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="h-[100vh] px-2 md:px-0"
    >
      <div className=" flex justify-center items-center h-full">
        <div className="bg-white   md:flex gap-10 p-10 rounded-tr-[90px] rounded-bl-[90px] shadow-2xl shadow-[#eb8b73] my-20">
          <div>
            <img
              src={profile}
              className="h-[200px] md:h-[300px] w-[200px] md:w-[284px] md:relative md:-mt-24 rounded-md"
              alt=""
            />
            <p className="mt-3 flex  items-center gap-1 text-[#6B4431]">
              <IoCalendarOutline />
              Joined December,2025
            </p>
            <p className="flex mt-1 items-center gap-1 text-[#6B4431]">
              <CiLocationOn color="#6B4431" />
              Ontario, USA
            </p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="text-[#8C5940] font-poppins text-[36px] font-bold ">
                Emily
              </p>
              <div className="bg-[#FFA175] text-white p-2 rounded-md shadow-lg cursor-pointer">
                <FiEdit  />
              </div>
            </div>
            <p>Emily34@gmail.com</p>
            <div className="mt-5 space-y-3 ">
              <p className="flex justify-between">
                <span>Gender</span>{" "}
                <span className="text-[#767676]">Female</span>
              </p>
              <p className="flex justify-between">
                <span>Age</span> <span className="text-[#767676]">35</span>
              </p>
              <p className="flex justify-between gap-20">
                <span>Phone</span>{" "}
                <span className="text-[#767676]">+1152654433</span>
              </p>
            </div>
            <p
              className="mt-4
            "
            >
              Bio:
            </p>
            <p className="bg-[#FFE2D4] max-w-md p-2 mt-2 rounded-md shadow-lg">
              Write a few lines about yourself and your character. Tell us about
              your achievements, priorities and life experience. This way your
              profile will become more interesting and attract more attention.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

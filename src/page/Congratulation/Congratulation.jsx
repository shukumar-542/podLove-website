import React from "react";
import bg from "../../assets/MatchResults.png";
import cng from "../../assets/cong.png";
import { Link } from "react-router";
import AuthButton from "../../component/AuthButton/AuthButton";

const Congratulation = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        imageRendering: "high-quality",
      }}
      className="h-[100vh]  relative   "
    >
      {/* Opacity section */}
      <div className="bg-black absolute opacity-50 inset-0 z-0 "></div>
      {/* Grid divide by 12 column */}
      <div className="grid grid-cols-12 items-center justify-center h-full w-full container mx-auto">
        <div className="  md:col-span-1"></div>
        {/* Main content */}
        <div className="bg-white shadow-5xl  rounded-md  p-5 md:p-10 col-span-12 md:col-span-5 z-10 mx-2 md:mx-0">
          <h1 className="text-center font-poppins font-semibold text-4xl">
            Match Results
          </h1>
          <p className="text-center max-w-80 mx-auto mt-2">
            Get Ready For Your Podcast Experiences!
          </p>

          <div className="flex  justify-center my-10">
            <img src={cng} alt="" />
          </div>
          <p className="text-[#2757A6] text-center text-2xl font-poppins">
            Congratulation
          </p>
          <p className="text-[#FFA175] text-center text-2xl font-poppins mt-4">
            You’ve been matched!!
          </p>
          <p className=" text-center  font-poppins mt-4">
            You will meet them during your podcast episode.
          </p>

          <div className="mx-16">
            <Link to={'/match-result'}>
              <AuthButton className={"py-1  mt-5 "}>Next</AuthButton>
            </Link>
          </div>
        </div>

        {/* Space after content */}
        <div className="md:col-span-6"></div>
      </div>
    </div>
  );
};

export default Congratulation;

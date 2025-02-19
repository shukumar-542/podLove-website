import React from "react";
import { Link } from "react-router";
import AuthButton from "../../component/AuthButton/AuthButton";
import bg from "../../assets/m.png";
import match1 from "../../assets/match.png";
import match2 from "../../assets/match2.png";
import match3 from "../../assets/match3.png";
import match4 from "../../assets/match4.png";

const MatchResult = () => {
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
        <div className="bg-white shadow-black shadow-2xl  rounded-md  p-5 md:p-10 col-span-12 md:col-span-5 z-10 mx-2 md:mx-0">
          <h1 className="text-center font-poppins font-semibold text-4xl">
            Match
          </h1>
          <p className="text-center max-w-80 mx-auto mt-2">
            We have found potential matches for you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 ">
            <div>
              <img src={match1} alt="" />
            </div>
            <div>
              <img src={match1} alt="" />
            </div>
            <div>
              <img src={match1} alt="" />
            </div>
            <div>
              <img src={match1} alt="" />
            </div>
          </div>
          <p className="text-center max-w-96 mx-auto mb-10">
            The schedule for your podcast episodes will be shared with you soon.
          </p>

          <div className="mx-16">
            <Link>
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

export default MatchResult;

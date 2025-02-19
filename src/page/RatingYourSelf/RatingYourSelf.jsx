import React, { useState } from "react";
import bg from "../../assets/personality.png";
import { Link } from "react-router";
import AuthButton from "../../component/AuthButton/AuthButton";
const color = [
  "#FFE2D4",
  "#FFD4C0",
  "#FFC0A3",
  "#FFB491",
  "#FFA175",
  "#E8936A",
  "#B57253",
];
const RatingYourSelf = () => {
  const [selectedRating, setSelectedRating] = useState(1);
  const [selectedHomeBody, setSelectHomeBody] = useState(3);
  const [selectedOptimist, setSelectOptimist] = useState(2);
  const handleSelectRating = (rating) => {
    setSelectedRating(rating);
  };


  const handleSelectHomeBody = (rating)=>{
    setSelectHomeBody(rating)
  }

  const handleOptimist  = (rating)=>{
    setSelectOptimist(rating)
  }
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        imageRendering: "high-quality",
      }}
      className="h-[100vh]  relative "
    >
      {/* Opacity section */}
      <div className="bg-black absolute opacity-50 inset-0 z-0 "></div>
      {/* Grid divide by 12 column */}
      <div className="grid grid-cols-12 items-center justify-center h-full w-full container mx-auto">
        <div className="  md:col-span-1"></div>
        {/* Main content */}
        <div className="bg-white  rounded-md  p-5 md:p-10 col-span-12 md:col-span-5 z-10 mx-2 md:mx-0">
          <h1 className="text-center font-poppins font-semibold text-4xl">
          Personality Traits
          </h1>
          <p className="text-center">Rate yourself on the following personality traits</p>
         
         
          <div className="max-w-5xl mx-auto">
            <div>
              <p className="flex items-center justify-between mb-5 mt-10">
                <span>Introvert</span> <span>Extrovert</span>{" "}
              </p>
              <div className="flex gap-5 justify-between mb-10">
                {[...Array(7)]?.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelectRating(index)}
                    className={` h-4 w-16 rounded-full cursor-pointer `}
                    style={{
                      backgroundColor:
                        selectedRating !== null && index <= selectedRating
                          ? color[index]
                          : "#D1D5DB",
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div>
              <p className="flex items-center justify-between mb-5 mt-10">
                <span>Homebody</span> <span>Adventurous</span>{" "}
              </p>
              <div className="flex gap-5 justify-between mb-10">
                {[...Array(7)]?.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelectHomeBody(index)}
                    className={` h-4 w-16 rounded-full cursor-pointer `}
                    style={{
                      backgroundColor:
                      selectedHomeBody !== null && index <= selectedHomeBody
                          ? color[index]
                          : "#D1D5DB",
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div>
              <p className="flex items-center justify-between mb-5 mt-10">
                <span>Pragmatist</span> <span>Optimist</span>{" "}
              </p>
              <div className="flex gap-5 justify-between mb-10">
                {[...Array(7)]?.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => handleOptimist(index)}
                    className={` h-4 w-16 rounded-full cursor-pointer `}
                    style={{
                      backgroundColor:
                      selectedOptimist !== null && index <= selectedOptimist
                          ? color[index]
                          : "#D1D5DB",
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <Link to={"/upload-photo"}>
            <AuthButton className={"py-1"}>Next</AuthButton>
          </Link>
        </div>

        {/* Space after content */}
        <div className="md:col-span-6"></div>
      </div>
    </div>
  );
};

export default RatingYourSelf;

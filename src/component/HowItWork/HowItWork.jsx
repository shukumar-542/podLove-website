import React from "react";
import step1 from "../../assets/step1.png";
import step2 from "../../assets/step2.png";
import step3 from "../../assets/step3.png";
import step4 from "../../assets/step4.png";
import { Button } from "../Shared/Button/Button";
const HowItWork = () => {
  return (
    <div className="p-4 md:px-0">
      <div className="container mx-auto my-20">
        <h1 className="text-4xl text-center text-[#6B4431] font-bold">
          How It Work
        </h1>
        <p className="text-center text-xl mt-2 text-[#6B4431]">
          Your Step-by-Step Journey
        </p>
        <p className="text-[#5C5C5C] text-center mt-2">
          We’ve streamlined the process into four simple steps
        </p>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-20 mt-10">
          <div className="bg-[#FFE2D4] hover:bg-[#FFC0A3] transition-all duration-200 border border-dashed p-4 relative">
            <div className="">
              <img
                src={step1}
                alt=""
                className="bg-[#FFC0A3] p-2 rounded-full absolute top-[-25px]"
              />
              <p className="text-[#E84B3C] font-bold text-2xl flex justify-end">
                01
              </p>
            </div>
            <p className="text-[#6B4431] text-2xl font-bold  ">GET MATCHED</p>
            <p className="mt-5">
              Discover quality singles who share your values, pre-vetted by our
              team.
            </p>
          </div>
          <div className="bg-[#FFE2D4] hover:bg-[#FFC0A3] transition-all duration-200 border border-dashed p-4 relative">
            <div className="">
              <img
                src={step2}
                alt=""
                className="bg-[#FFC0A3] p-2 rounded-full absolute top-[-25px]"
              />
              <p className="text-[#8D44AB] font-bold text-2xl flex justify-end">
                02
              </p>
            </div>
            <p className="text-[#6B4431] text-2xl font-bold  ">PODCAST</p>
            <p className="mt-5">
              Skip the awkward texts- spark real chemistry through meaningful
              conversation.
            </p>
          </div>
          <div className="bg-[#FFE2D4] hover:bg-[#FFC0A3] transition-all duration-200 border border-dashed p-4 relative">
            <div className="">
              <img
                src={step3}
                alt=""
                className="bg-[#FFC0A3] p-2 rounded-full absolute top-[-25px]"
              />
              <p className="text-[#FF853D] font-bold text-2xl flex justify-end">
                03
              </p>
            </div>
            <p className="text-[#6B4431] text-2xl font-bold  ">MEET UP</p>
            <p className="mt-5">
              Take your connection from the podcast to real life at a public
              spot.
            </p>
          </div>
          <div className="bg-[#FFE2D4] hover:bg-[#FFC0A3] transition-all duration-200 border border-dashed p-4 relative">
            <div className="">
              <img
                src={step4}
                alt=""
                className="bg-[#FFC0A3] p-2 rounded-full absolute top-[-25px]"
              />
              <p className="text-[#18BB9B] font-bold text-2xl flex justify-end">
                04
              </p>
            </div>
            <p className="text-[#6B4431] text-2xl font-bold  ">SHARE SUCCESS</p>
            <p className="mt-5">
              Skip the awkward texts- spark real chemistry through meaningful
              conversation.
            </p>
          </div>
        </section>
        <div className="mt-10 flex justify-center">
            <Button className={'py-2'}>Find Your Match</Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
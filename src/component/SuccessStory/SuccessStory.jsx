import { useEffect, useState } from "react";
import img1 from "../../assets/loop1.png";
import img2 from "../../assets/loop2.png";
import img3 from "../../assets/loop3.png";
// import img4 from "../../assets/client3.png";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { Button } from "../Shared/Button/Button";
import { useNavigate } from "react-router";

const images = [img1, img2, img3];

const SuccessStory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const token = localStorage.getItem("podlove-token");
  const nagivate = useNavigate();
  const handleClick = () => {
    if (!token) {
      nagivate("/sign-up");
    } else {
      nagivate("/home");
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#EBEBEB] py-10">
      <div className="container mx-auto mt-5">
        <h1 className="text-center text-4xl text-[#6B4431] font-poppins">
          Success in Finding Your Perfect Match{" "}
        </h1>
        <p className="text-center text-xl text-[#333333] mt-2 font-poppins">
          Let’s guide you to meaningful!{" "}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-10 items-center justify-center mt-20 mx-2 m">
          <div className="col-span-1 ">
            <img
              src={images[currentIndex]}
              className="transition-all duration-700 rounded-tl-[40px] w-[400px] rounded-br-[40px] border  "
              alt=""
            />
          </div>

          <div className="col-span-2">
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-[#EBEBEB] hover:bg-[#FFF6F1] transition duration-200 shadow-md rounded-md p-5">
                <h1 className="text-center text-[#6B4431] font-bold text-2xl">
                  Before Match{" "}
                </h1>
                <div className="mt-10 space-y-5 ">
                  <p className="flex gap-5 text-[#333333]">
                    <AiFillDislike color="#6B4431" size={25} />
                    Stuck on apps with mismatched results
                  </p>
                  <p className="flex gap-5 text-[#333333]">
                    <AiFillDislike color="#6B4431" size={25} />
                    Unsure where to turn for reliable help
                  </p>
                  <p className="flex gap-5 text-[#333333]">
                    <AiFillDislike color="#6B4431" size={25} />
                    Feeling frustrated and out of options
                  </p>
                </div>
              </div>
              <div className="bg-[#EBEBEB] shadow-md rounded-md p-5 hover:bg-[#FFF6F1] transition duration-200">
                <h1 className="text-center text-[#6B4431] font-bold text-2xl">
                  The PodLove Difference{" "}
                </h1>
                <div className="mt-10 space-y-5 ">
                  <p className="flex gap-5 text-[#333333]">
                    <AiFillLike color="#2757A6" size={25} />
                    Matches aligned with your values and goals
                  </p>
                  <p className="flex gap-5 text-[#333333]">
                    <AiFillLike color="#2757A6" size={25} />
                    A clear, process guided by experts
                  </p>
                  <p className="flex gap-5 text-[#333333]">
                    <AiFillLike color="#2757A6" size={25} />
                    Feeling frustrated and out of options.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <Button handleOnClick={handleClick} className={'py-1 md:text-[20px]'}>Find your Match</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;

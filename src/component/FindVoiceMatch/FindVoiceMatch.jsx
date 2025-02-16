import React from "react";
import img from "../../assets/bg.png";
import client1 from "../../assets/find1.png";
import client2 from "../../assets/find2.jpg";
import client3 from "../../assets/find3.jpg";

const FindVoiceMatch = () => {
  const data = [
    {
      img: client1,
      title: "Fastest  Match",
      des: "Get your podlove in less than an hour! That’s as fast as it can get.",
    },
    {
      img: client2,
      title: "So Much to Choose From",
      des: "Find your favourite among the thousands ofpeople in our Web.",
    },
    {
      img: client3,
      title: "Best Choose In Word!",
      des: "Get the choose and comobs at the best match anly at Podlove!",
    },
  ];

  return (
    <div style={{ backgroundImage: `url(${img})`}} className="py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-[#6B4431] text-4xl font-bold">Find Your Voice, Find Your Match.</h1>
        <p className="text-2xl my-8">
          it's all about listening, understanding, and sharing the journey
          together.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-3 ">
          {data?.map((user, i) => {
            return (
              <div className=" mx-auto">
                <div className="py-10 ">
                  <img
                    src={user?.img}
                    className="max-h-[374px] w-[374px] rounded-2xl object-cover mx-auto "
                
                    alt=""
                  />
                  <h1 className="text-[24px] font-bold text-[#333333] my-4">{user?.title}</h1>
                  <p className="max-w-[350px] ">{user?.des}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default FindVoiceMatch;

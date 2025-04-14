import React from "react";
import about from "../../assets/about1.png";
import bg from "../../assets/about-bg.png";
const AboutUs = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` , backgroundRepeat : 'no-repeat' , backgroundPosition : 'center' , backgroundSize  :'cover'}}>
      <div className="container mx-auto">
        {/* About text */}
        <div className="bg-[#FFA175] py-10">
          <h1 className="text-3xl px-4 font-bold">Discover Who We Are &</h1>
          <div className="flex items-center  ml-4 mt-5">
            <div className="bg-[#DC4600] h-2 w-10"></div>
            <p className="text-white font-bold text-4xl px-4">What drives us</p>
          </div>
        </div>

        {/* about Image  */}
        <div className="bg-red-500 w-full">
          <img
            src={about}
            className="w-full object-center h-[380px] object-cover "
            alt=""
          />
        </div>
        <div className="py-10 space-y-3">
          <p className="text-4xl font-bold">
            Get to Know Us: Our <span className="text-[#E8936A]"> Journey</span>
          </p>
          <p className="text-4xl font-bold">
            And <span className="text-[#E8936A]">Vision</span>{" "}
          </p>
        </div>
        {/* About description */}
        <p className=" font-poppins mb-5">
          Could you clarify what you mean by "podlove Journey and Vision"? Are
          you asking about a personal journey related to foot care or something
          else like a business vision for a product or service? I'd be happy to
          help!
        </p>
        <p className=" font-poppins mb-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using.
        </p>
        <p className=" font-poppins mb-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <p className=" font-poppins mb-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using.
        </p>
        <p className="pb-10 font-poppins">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

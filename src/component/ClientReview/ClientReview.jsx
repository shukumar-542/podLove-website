import { Button } from "../Shared/Button/Button";
import { Carousel } from "antd";
import img from "../../assets/quote.png";
import img1 from "../../assets/quote1.png";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router";

const CustomArrow = ({ type, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`custom-arrow ${
        type === "prev" ? "left-arrow" : "right-arrow"
      }`}
    >
      {type === "prev" ? <LeftOutlined /> : <RightOutlined />}
    </div>
  );
};

const ClientReview = () => {
  return (
    <div className="bg-[#EBEBEB]">
      <div className="container mx-auto py-10">
        <p className="text-2xl md:text-4xl font-bold text-center">
          What Our Users Are Saying
        </p>
        <p className="text-center text-[#5C5C5C] max-w-[400px] mx-auto mt-2">
          &quot;Hear From Our Users: Real Feedback, Real Experiences&quot;
        </p>
        <div className="flex justify-center my-10">
          <Link to="/our-approach">
            <Button className="py-2">Find your Match</Button>
          </Link>
        </div>

        <div>
          <Carousel
            arrows
            autoplay
            dots={false}
            slidesToShow={3}
            slidesToScroll={1}
            responsive={[
              {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 },
              },
              {
                breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
              },
            ]}
            prevArrow={<CustomArrow type="prev" />}
            nextArrow={<CustomArrow type="next" />}
          >
             <div className="bg-white p-5 rounded-lg shadow-md ">
              <img src={img} alt="" />
              <div className="my-5 flex items-center gap-2">
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                <IoStar color="#767676" size={25} />
                </p>
              </div>
              <h3 className="text-2xl font-bold text-[#242424] mt-3">
              Where podcasts meet real connection
              </h3>
              <p className="mt-5">
                “Podlove turns meaningful podcast conversations into genuine romantic matches. It feels natural and surprisingly accurate.”
              </p>
              <p className="text-xl font-bold mt-5">— Alex Morgan</p>
              <div className="flex justify-end">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
              <img src={img} alt="" />

              <div className="my-5 flex items-center gap-2">
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
              </div>
              <h3 className="text-2xl font-bold text-[#242424] mt-3">
              Meaningful matches not swipes
              </h3>
              <p className="mt-5">
              “Listening together and then being matched was such a unique experience. Podlove feels deeper than dating apps.”
              </p>
              <p className="text-xl font-bold mt-5">— Michael Thompson</p>
              <div className="flex justify-end">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
              <img src={img} alt="" />

              <div className="my-5 flex items-center gap-2">
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
              </div>
              <h3 className="text-2xl font-bold text-[#242424] mt-3">
              A refreshing way to meet people
              </h3>
              <p className="mt-5">
              “I loved how Podlove matched me with someone who actually shared my interests after the podcast. It felt intentional.”
              </p>
              <p className="text-xl font-bold mt-5">— Sarah Williams</p>
              <div className="flex justify-end">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
              <img src={img} alt="" />
              <div className="my-5 flex items-center gap-2">
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="white" size={25} />
                </p>
              </div>
              <h3 className="text-2xl font-bold text-[#242424] mt-3">
              AI that connects beyond listening
              </h3>
              <p className="mt-5">
              “The AI matching after each session is thoughtful and personal. Podlove makes connections feel real, not random.”
              </p>
              <p className="text-xl font-bold mt-5">— Daniel Brooks</p>
              <div className="flex justify-end">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
              <img src={img} alt="" />

              <div className="my-5 flex items-center gap-2">
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
                <p className="bg-[#FFB491] p-2 rounded-sm shadow-2xl">
                  <IoStar color="#767676" size={25} />
                </p>
              </div>
              <h3 className="text-2xl font-bold text-[#242424] mt-3">
              More than just a podcast app
              </h3>
              <p className="mt-5">
              “Podlove helped me connect romantically with someone who truly resonated with the same podcast moments.”
              </p>
              <p className="text-xl font-bold mt-5">— Sarah Williams</p>
              <div className="flex justify-end">
                <img src={img1} alt="" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;

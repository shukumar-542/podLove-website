import React, { useState } from "react";
import logo from "../../assets/podLogo.png";
import { Radio } from "antd";
import AuthButton from "../../component/AuthButton/AuthButton";
import { Link } from "react-router";
const DiscoverCompatibility = () => {
  const [answers, setAnswers] = useState({});

  const handleChange = (question, value) => {
    setAnswers({ ...answers, [question]: value });
  };
  return (
    <div className="bg-[#FBECE5] min-h-screen">
      <div className="container mx-auto py-10">
        <div className="flex flex-col justify-center items-center ">
          <img className="w-[267px] " src={logo} alt="" />
          <p className="text-[40px] font-medium font-poppins mt-5 text-[#242424]">
            Discover Compatibility
          </p>
        </div>

        <div className=" p-6">
          <h2 className="text-lg font-bold mb-4">
            Let's Discover Your Compatibility!
          </h2>

          {/* Question 1 */}
          <div className="mb-6">
            <p className="font-semibold">
              Do you prefer spending your weekends socializing in larger
              gatherings or relaxing at home with a few close friends?
            </p>
            <Radio.Group
              onChange={(e) => handleChange("socializing", e.target.value)}
              className="flex flex-col mt-2 custom-radio"
            >
              <Radio value="larger_gatherings">Larger gatherings</Radio>
              <Radio value="close_friends">Relaxing with close friends</Radio>
            </Radio.Group>
          </div>

          {/* Question 2 */}
          <div className="mb-6">
            <p className="font-semibold">
              When faced with a major life decision, do you usually follow your
              head (logic) or your heart (feelings)?
            </p>
            <Radio.Group
              onChange={(e) => handleChange("decision_making", e.target.value)}
              className="flex flex-col mt-2 custom-radio"
            >
              <Radio value="logic">Head (logic)</Radio>
              <Radio value="feelings">Heart (feelings)</Radio>
            </Radio.Group>
          </div>

          {/* Question 3 */}
          <div className="mb-6">
            <p className="font-semibold">
              Which of these activities sounds most appealing to you?
            </p>
            <Radio.Group
              onChange={(e) => handleChange("activities", e.target.value)}
              className="flex flex-col mt-2 custom-radio"
            >
              <Radio value="hiking">A weekend hiking trip in nature</Radio>
              <Radio value="museum">A museum or art gallery visit</Radio>
              <Radio value="cozy_movie">A cozy movie night at home</Radio>
              <Radio value="concert">A concert or live music event</Radio>
            </Radio.Group>
          </div>

          {/* Question 4 */}
          <div className="mb-6">
            <p className="font-semibold">
              How important is personal growth in your life?
            </p>
            <Radio.Group
              onChange={(e) => handleChange("personal_growth", e.target.value)}
              className="flex flex-col mt-2 custom-radio"
            >
              <Radio value="extremely_important">
                Extremely important – I am always working on bettering myself
              </Radio>
              <Radio value="moderately_important">
                Moderately important – I like to grow but not obsessively
              </Radio>
              <Radio value="not_important">
                Not very important – I prefer stability and consistency
              </Radio>
            </Radio.Group>
          </div>

          {/* Question 5 */}
          <div className="mb-6">
            <p className="font-semibold">How do you like to show affection?</p>
            <Radio.Group
              onChange={(e) => handleChange("affection", e.target.value)}
              className="flex flex-col mt-2 custom-radio"
            >
              <Radio value="touch">Physical touch (hugs, kisses, etc.)</Radio>
              <Radio value="words">
                Words of affirmation (compliments, verbal expressions of love)
              </Radio>
              <Radio value="service">
                Acts of service (doing things to help my partner)
              </Radio>
              <Radio value="quality_time">
                Quality time (spending focused time together)
              </Radio>
            </Radio.Group>
          </div>

          {/* Question 6 */}
          <div className="mb-6">
            <p className="font-semibold">
              How do you envision your ideal future?
            </p>
            <Radio.Group
              onChange={(e) => handleChange("future", e.target.value)}
              className="flex flex-col mt-2 custom-radio"
            >
              <Radio value="family">Building a family with a partner</Radio>
              <Radio value="travel">
                Traveling the world and having enriching experiences
              </Radio>
              <Radio value="career">
                Focusing on my career and personal goals
              </Radio>
              <Radio value="peaceful_life">
                Living a simple, peaceful life surrounded by loved ones
              </Radio>
            </Radio.Group>
          </div>
          <Link to={"/discover-compatibility-part"}>
            <AuthButton className={"max-w-80 py-1"}>Next</AuthButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCompatibility;

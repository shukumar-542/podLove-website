import React from "react";
import bg from "../../assets/age-bg.png";
import AuthButton from "../../component/AuthButton/AuthButton";
import { Link } from "react-router";
import { Form, Select } from "antd";

const ageOptions = Array.from({ length: 16 }, (_, i) => i + 35);
const Age = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat", 
        backgroundPosition: "center",
        imageRendering: "high-quality",
      }}
      className="h-[100vh]  relative"
    >
      <div className="bg-black absolute opacity-50 inset-0 z-0 "></div>
      <div className="flex items-center justify-start max-w-5xl mx-auto  h-full p-2 md:p-0 z-10 relative">
        <div className="bg-white  rounded-md  p-5 md:p-10 max-w-5xl">
          <p className=" text-xl md:text-4xl font-bold text-[#333333] text-center">
            Age
          </p>
          <p className="mt-4 max-w-96 font-medium text-center">
            Select your age for better matches.
          </p>
          <p className="mt-4 max-w-96 font-thin text-center mb-5">
            Those who love deeply never grow old; they may die of old age, but
            they die young.
          </p> 

          <Form layout="vertical">
            <Form.Item label={<p className="font-medium">Your Age</p>}>
              <Select placeholder="Select your age">
                {ageOptions.map((age) => (
                  <Option key={age} value={age}>
                    {age}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <p className="font-medium">Preferred Age</p>
            <div className="flex justify-between items-center gap-5 mt-2">
              <Form.Item className="w-full" label="Minimum Age">
                <Select placeholder="35">
                  {ageOptions.map((age) => (
                    <Option key={age} value={age}>
                      {age}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item className="w-full" label="Maximum Age">
                <Select placeholder="55">
                  {ageOptions.map((age) => (
                    <Option key={age} value={age}>
                      {age}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
          </Form>
          <Link to={"/gender"}>
            <AuthButton className={"py-1"}>Next</AuthButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Age;

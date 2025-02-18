import React from "react";
import bg from "../../assets/gender-bg.png";
import { Form, Select } from "antd";
import { Link } from "react-router";
import AuthButton from "../../component/AuthButton/AuthButton";

const Gender = () => {
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
            Gender
          </h1>
          <p className="text-center font-poppins font-medium my-2">
            Choose Your Gender for Better Matches
          </p>
          <p className="text-center font-poppins mt-3 font-normal mb-10">
            Life is the flower for which love is the honey.
          </p>
          <Form layout="vertical">
            <Form.Item
              label={<p className="font-medium w-full">Select your gender</p>}
            >
              <Select placeholder="Select your gender">
                <Option value={"female"}>Female</Option>
                <Option value={"male"}>Male</Option>
                <Option value={"non-binary"}>Non-binary</Option>
                <Option value={"transgender"}>Transgender</Option>
                <Option value={"gender-fluid"}>Gender Fluid</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={
                <p className="font-medium w-full ">
                  Select your preferred gender
                </p>
              }
            >
              <Select placeholder="Select your preferred gender">
                <Option value={"female"}>Female</Option>
                <Option value={"male"}>Male</Option>
                <Option value={"non-binary"}>Non-binary</Option>
                <Option value={"transgender"}>Transgender</Option>
                <Option value={"gender-fluid"}>Gender Fluid</Option>
                <Option value={"all"}>Open to All</Option>
              </Select>
            </Form.Item>
          </Form>
          <Link to={"/gender"}>
            <AuthButton className={"py-1"}>Next</AuthButton>
          </Link>
        </div>

        {/* Space after content */}
        <div className="md:col-span-6"></div>
      </div>
    </div>
  );
};

export default Gender;

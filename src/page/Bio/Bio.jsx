import React from "react";
import bg from "../../assets/bio-bg.png";
import { Link } from "react-router";
import AuthButton from "../../component/AuthButton/AuthButton";
import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";

const Bio = () => {
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
        <div className="bg-white shadow-2xl shadow-[#F26828] rounded-md  p-5 md:p-10 col-span-12 md:col-span-5 z-10 mx-2 md:mx-0">
          <h1 className="text-center font-poppins font-semibold text-4xl">
            Add Your Bio
          </h1>
          <p className="text-center">Please do not add your name</p>
          <p className="text-center font-poppins  my-5">
            Here are a few prompts to get you started:
          </p>
          <div className="space-y-4 my-10">
            <p>1.What inspires you the most in life? </p>
            <p>2.What are your passions or hobbies?</p>
            <p>3.What values matter most to you in relationships?</p>
            <p>4.How do you describe your personality in three words?</p>
          </div>
          <Form layout="vertical">
            <Form.Item label={<p className="font-medium">Write your bio(max 200 word) </p>}>
                <TextArea rows={10}/>
            </Form.Item>
          </Form>
          <Link to={"/upload-photo"}>
            <AuthButton className={"py-2"}>Next</AuthButton>
          </Link>
        </div>

        {/* Space after content */}
        <div className="md:col-span-6"></div>
      </div>
    </div>
  );
};

export default Bio;

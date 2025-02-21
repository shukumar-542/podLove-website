import React from "react";
import bg from "../../assets/b.png";
import profile from "../../assets/profile.png";
import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import AuthButton from "../../component/AuthButton/AuthButton";
const EditProfile = () => {
  return (
    <div className="px-2 md:px-0 bg-[#FAF2EF] flex items-center justify-center">
      <div className="bg-white  shadow-md shadow-[#eb8b73] my-10 p-5 rounded-md w-full px-2 md:px-10 md:w-1/3">

        <img src={profile} className="h-32 w-32 rounded-full relative -top-16 left-28 md:left-52" alt="" />
        <Form layout="vertical">
          <div className="md:flex  gap-5 w-full ">
            <Form.Item label={"First Name"}  className="w-full">
              <Input placeholder="Enter Your Name"  />
            </Form.Item>
            <Form.Item label={"Phone Number"} className="w-full">
              <Input placeholder="Enter Your Phone Number" />
            </Form.Item>
          </div>
          <div className="md:flex   gap-5">
            <Form.Item label={"Date of Birth(MM/DD/YYYY)"} className="w-full">
              <Input placeholder="02/24/2025" />
            </Form.Item>
            <Form.Item label={"Gender"} className="w-full">
              <Input placeholder="Enter Your gender" />
            </Form.Item>
          </div>
          <Form.Item label="Location">
            <Input  placeholder="Ontario, USA" />
          </Form.Item>
          <Form.Item label="Location">
            <TextArea/>
          </Form.Item>
          <AuthButton className={"py-2"}>Update</AuthButton>
        </Form>
      </div>
    </div>
  );
};

export default EditProfile;

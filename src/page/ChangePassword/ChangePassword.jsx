import React from "react";
import AuthButton from "../../component/AuthButton/AuthButton";
import { Form } from "antd";
import Password from "antd/es/input/Password";

const ChangePassword = () => {
  return (
    <div className="bg-[#FAF2EF]">
      <div className="max-w-5xl py-10 mx-auto">
        <div className="md:flex  px-20 md:px-0 space-y-4  items-center gap-10 ">
          <AuthButton className={"py-2"}>Change Password</AuthButton>
          <button className="w-full border border-[#FFA175] py-2 rounded-md bg-white">Pause Account</button>
          <button className="w-full border border-[#FFA175] rounded-md bg-white py-2">Delete Account</button>
        </div>

        <Form layout="vertical" className="mt-10 px-20">
            <Form.Item label="Current Password">
                <Password placeholder="*********" className="bg-[#FAF2EF]"/>
            </Form.Item>
            <Form.Item label="New Password">
                <Password placeholder="*********" className="bg-[#FAF2EF]" />
            </Form.Item>
            <Form.Item label="New Password">
                <Password placeholder="*********" className="bg-[#FAF2EF]"/>
            </Form.Item>
            <div className="max-w-md text-center mx-auto">
                <AuthButton className={"py-2"}>Update</AuthButton>
            </div>
        </Form>
      </div>
    </div>
  );
};

export default ChangePassword;

import React from "react";
import AuthButton from "../../component/AuthButton/AuthButton";
import { Form } from "antd";
import Password from "antd/es/input/Password";
import { useChangePasswordMutation } from "../../redux/Api/AuthApi";
import { toast } from "sonner";

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const handleChangePassword = (values) => {
    console.log(values);
    const data = {
      ...values,
    };

    changePassword(data)
      .unwrap()
      .then((payload) => toast.success(payload?.message))
      .catch((error) => toast.error(error?.data?.message));
  };
  return (
    <div className="bg-[#FAF2EF]">
      <div className="max-w-5xl py-10 mx-auto">
        <div className="md:flex  px-20 md:px-0   items-center gap-10 ">
          <AuthButton className={"py-2"}>Change Password</AuthButton>
          <button className="w-full border border-[#FFA175] py-2 rounded-md bg-white">
            Pause Account
          </button>
          <button className="w-full border border-[#FFA175] rounded-md bg-white py-2">
            Delete Account
          </button>
        </div>

        <Form
          onFinish={handleChangePassword}
          layout="vertical"
          className="mt-10 px-20"
        >
          {/* Current Password */}
          <Form.Item
            label="Current Password"
            name="password"
            rules={[
              { required: true, message: "Please enter your current password" },
            ]}
          >
            <Password placeholder="*********" className="bg-[#FAF2EF]" />
          </Form.Item>

          {/* New Password */}
          <Form.Item
            label="New Password"
            name="newPassword"
            rules={[
              { required: true, message: "Please enter a new password" },
              {
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                message:
                  "Password must be at least 8 characters, contain both letters (uppercase and lowercase), a number, and a special character.",
              },
            ]}
          >
            <Password placeholder="*********" className="bg-[#FAF2EF]" />
          </Form.Item>

          {/* Confirm Password */}
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["newPassword"]}
            rules={[
              { required: true, message: "Please confirm your new password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match")
                  );
                },
              }),
            ]}
          >
            <Password placeholder="*********" className="bg-[#FAF2EF]" />
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

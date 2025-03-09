import React from "react";
import img from "../../assets/signUpBg.png";
import { Checkbox, Form, Input, Spin } from "antd";
import Password from "antd/es/input/Password";
import { Link, NavLink, useNavigate } from "react-router";
import AuthButton from "../../component/AuthButton/AuthButton";
import { useSignUpMutation } from "../../redux/Api/AuthApi";
import { toast } from "sonner";
const SignUp = () => {
  const [singUp , {isLoading}] = useSignUpMutation();
const navigate = useNavigate()
  // ----Handle signup function------//
  const handleSignUp = (values) => {
    if(values?.password !== values?.confirmPassword){
      return toast.error("Password does not match!")
    }

    singUp(values)
      .unwrap()
      .then((payload) => {
        localStorage.setItem("email" , values.email)
        toast.success(payload.message)
        navigate("/verify-otp")
      })
      .catch((error) => toast.error(error?.data?.message));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        imageRendering: "high-quality",
      }}
      className="h-[100vh]  relative"
    >
      <div className="bg-black absolute opacity-50 inset-0 z-0 "></div>
      <div className="flex items-center justify-start max-w-5xl mx-auto  h-full p-2 md:p-0 z-10 relative">
        <div className="bg-white shadow-2xl shadow-[#F26828] rounded-md  p-5 md:p-10 max-w-5xl">
          <p className="text-4xl font-bold text-[#333333]">Sign Up</p>
          <p className="mt-2">Just a few quick things to get started</p>

          <div className="flex items-center justify-between gap-10">
            <div className="w-[250px] md:w-[450px] ">
              <Form layout="vertical" onFinish={handleSignUp}>
                <Form.Item label={"Name"} name={"name"}>
                  <Input placeholder="Enter your name here" />
                </Form.Item>
                <Form.Item label={"Email"} name={"email"}>
                  <Input placeholder="Enter your email here" />
                </Form.Item>
                <Form.Item label={"Phone Number"} name="phoneNumber">
                  <Input placeholder="Enter your number here" />
                </Form.Item>
                {/* <Form.Item label={"Address (optional)"}>
                          <Input placeholder="Enter your address here"/>
                      </Form.Item> */}
                <Form.Item label={"Password"} name={"password"}>
                  <Password placeholder="******" />
                </Form.Item>
                <Form.Item label={"Confirm Password"} name="confirmPassword">
                  <Password placeholder="******" />
                </Form.Item>
                <div className="flex justify-between items-center mb-3">
                  <p>
                    {" "}
                    <Checkbox /> I agree with the terms and condition
                  </p>
                </div>
                <AuthButton disabled={isLoading} className="bg-[#F68064] text-white w-full rounded-md py-2 text-xl shadow-md">
                  {isLoading ?  <Spin/> :  "Sign Up"}
                </AuthButton>
              </Form>
              <p className="text-[#767676] text-center mt-2">
                Already have an account?{" "}
                <NavLink to={"/login"} className="text-[#F68064]">
                  Sign In
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

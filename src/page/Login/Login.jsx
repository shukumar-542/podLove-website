import React from "react";
import img from "../../assets/loginBg.png";
import img1 from "../../assets/login.png";
import { Checkbox, Form, Input } from "antd";
import Password from "antd/es/input/Password";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router";
const Login = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        imageRendering: "high-quality",
      }}
      className="h-[100vh] "
    >
      <div className="flex items-center justify-center h-full p-2 md:p-0">
        <div className="bg-white rounded-md p-10">
          <p className="text-4xl font-bold text-[#333333]">Welcome Back!</p>
          <p className="mt-2">Please log in to continue access</p>

          <div className="flex items-center justify-between gap-10">
                <div className="w-full">
                    <Form layout="vertical">
                        <Form.Item label={"Email"}>
                            <Input placeholder="Enter your email here"/>
                        </Form.Item>
                        <Form.Item label={"Password"}>
                            <Password placeholder="******"/>
                        </Form.Item>
                        <div className="flex justify-between items-center mb-3">
                            <p> <Checkbox/> Remember me </p>
                            <p className="text-[#F68064]">Forget password</p>
                        </div>
                        <button className="bg-[#F68064] text-white w-full rounded-md py-2 text-xl shadow-md">Sign in</button>
                    </Form>
                    <button className="border w-full mt-5 border-[#F68064] py-2 rounded-md text-[#767676] flex items-center justify-center gap-2"><FcGoogle size={25} />Continue with Google</button>
                    <p className="text-[#767676] text-center mt-2">Don't have a account? <NavLink to={'/sign-up'}  className="text-[#F68064]">Sign Up</NavLink></p>
                </div>
                <div className="w-full hidden md:block">
                    <img src={img1} alt="" />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

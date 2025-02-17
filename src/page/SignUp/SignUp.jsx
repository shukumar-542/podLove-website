import React from 'react'
import img from "../../assets/signUpBg.png";
import img1 from "../../assets/signUp.png";
import { Checkbox, Form, Input } from 'antd';
import Password from 'antd/es/input/Password';
import { NavLink } from 'react-router';
const SignUp = () => {
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
    <div className='bg-black absolute opacity-50 inset-0 z-0 '></div>
    <div className="flex items-center justify-start max-w-5xl mx-auto  h-full p-2 md:p-0 z-10 relative">
      <div className="bg-white rounded-md  p-5 md:p-10 max-w-5xl">
        <p className="text-4xl font-bold text-[#333333]">Sign Up</p>
        <p className="mt-2">Just a few quick things to get started</p>

        <div className="flex items-center justify-between gap-10">
              <div className="w-[250px] md:w-[450px] ">
                  <Form layout="vertical">
                      <Form.Item label={"Email"}>
                          <Input placeholder="Enter your email here"/>
                      </Form.Item>
                      <Form.Item label={"Phone Number"}>
                          <Input placeholder="Enter your number here"/>
                      </Form.Item>
                      <Form.Item label={"Address (optional)"}>
                          <Input placeholder="Enter your address here"/>
                      </Form.Item>
                      <Form.Item label={"Password"}>
                          <Password placeholder="******"/>
                      </Form.Item>
                      <Form.Item label={"Confirm Password"}>
                          <Password placeholder="******"/>
                      </Form.Item>
                      <div className="flex justify-between items-center mb-3">
                          <p> <Checkbox/> I agree with the terms and condition</p>
                      </div>
                      <button className="bg-[#F68064] text-white w-full rounded-md py-2 text-xl shadow-md">Sign in</button>
                  </Form>
                  <p className="text-[#767676] text-center mt-2">Already  have an account? <NavLink to={'/login'}  className="text-[#F68064]">Sign Up</NavLink></p>
              </div>
              {/* <div className="w-full hidden md:block">
                  <img src={img1} alt="" />
              </div> */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUp
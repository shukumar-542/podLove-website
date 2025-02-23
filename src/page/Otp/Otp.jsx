import React, { useState } from "react";
import bg from "../../assets/otpBg.png";
import AuthButton from "../../component/AuthButton/AuthButton";
import OTPInput from "otp-input-react";
import { Link } from "react-router";

const Otp = () => {
  const [OTP, setOTP] = useState("");

  return (
    <div
      className="h-[100vh] min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-black absolute opacity-50 inset-0 z-0"></div>
      <div className="flex items-center justify-center max-w-5xl mx-auto h-full p-2 md:p-0 z-10 relative">
        <div className="bg-white rounded-md p-5 md:p-10 max-w-5xl w-full sm:w-auto">
          <p className="text-xl md:text-4xl font-bold text-[#333333] text-center">
            Verification Code
          </p>
          <p className="mt-4 max-w-96 font-thin text-center">
            Please enter the six-digit code we sent you to your number 878 7764 2922
          </p>

          <div className="my-10">
            <p className="text-[#2E2E2E] mb-2">Enter your code here</p>
            <OTPInput
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={5}
              otpType="number"
              inputClassName="w-8 h-10 md:w-10 md:h-12 text-lg md:text-xl text-center border border-[#FFC0A3] rounded-md"
              className="flex justify-center gap-2 sm:gap-3 md:gap-4"
              disabled={false}
              secure
            />
          </div>

          <Link to={"/location"}>
            <AuthButton className={"py-1"}>Verify</AuthButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Otp;

import { useState } from "react";
import bg from "../../assets/Verification.png";
import OTPInput from "otp-input-react";
import AuthButton from "../../component/AuthButton/AuthButton";
import { useVerifyEmailMutation } from "../../redux/Api/AuthApi";
import { Spin } from "antd";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const VerifyEmail = () => {
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();

  const handleVerifyOtp = () => {
    if (!otp) {
      return toast.error("Please enter your otp!");
    }
    const data = {
      email: localStorage.getItem("email"),
      recoveryOTP: otp,
    };
    verifyEmail(data)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);
        navigate("/set-new-password?email=");
      })
      .catch((error) => {
        toast.error(error?.data?.message);
      });
  };

  return (
    <div
      className="h-[100vh] min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-black absolute opacity-50 inset-0 z-0"></div>
      <div className="flex items-center justify-center max-w-5xl mx-auto h-full p-2 md:p-0 z-10 relative">
        <div className="bg-white shadow-2xl shadow-[#F26828] rounded-md p-5 md:p-10 max-w-5xl w-full sm:w-auto">
          <p className="text-xl md:text-4xl font-bold text-[#333333] text-center">
            Verification Code
          </p>
          <p className="mt-4 font-thin text-center">
            Please enter the six-digit code we sent you to your email address
          </p>

          <div className="mb-10 mt-3">
            <p className="text-[#2E2E2E] mb-4 text-center">
              Enter your code here
            </p>
            <OTPInput
              value={otp}
              onChange={setOTP}
              autoFocus
              OTPLength={6}
              otpType="number"
              inputClassName="w-8 h-10 md:w-10 md:h-12 text-lg md:text-xl text-center border border-[#FFC0A3] rounded-md"
              className="flex justify-center gap-2 sm:gap-3 md:gap-4"
              disabled={false}
            />
            {/* <div className="flex items-end justify-end mt-3">
              <p className=" border-b">Resend OTP</p>
            </div> */}
          </div>

          <AuthButton
            handleOnClick={() => handleVerifyOtp()}
            className={"py-2"}
          >
            {isLoading ? <Spin /> : "Verify"}
          </AuthButton>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;

/* eslint-disable react/prop-types */
import { Form, Input, Button } from "antd";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { toast } from "sonner";
import "flag-icons/css/flag-icons.min.css";
import {
  useVerifyPhoneMutation,
  useVerifyPhoneOtpMutation,
} from "../redux/Api/AuthApi";

const PhoneInputWithUS = ({ phone, setPhone, isVerified, setIsVerified }) => {
  const [localPhone, setLocalPhone] = useState(
    phone?.replace(/^\+1/, "") || ""
  );
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [otp, setOtp] = useState("");

  const [verifyPhone, { isLoading: isVerifyPhoneLoading }] =
    useVerifyPhoneMutation();
  const [verifyOtp, { isLoading: isVerifyOtpLoading }] =
    useVerifyPhoneOtpMutation();

  const formatUSNumber = (value) => {
    let digits = value.replace(/\D/g, ""); // remove non-digits
    if (digits.length > 10) {
      // take **last 10 digits**
      digits = digits.slice(-10);
    }
    return digits;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatUSNumber(e.target.value);
    setLocalPhone(formatted);
    setPhone("+1" + formatted);
    if (isVerified) setIsVerified(false);
  };

  const handlePaste = (e) => {
    const paste = formatUSNumber(e.clipboardData.getData("Text"));
    setLocalPhone(paste);
    setPhone("+1" + paste);
    e.preventDefault();
  };

  const handleSendVerify = async () => {
    if (localPhone.length !== 10) {
      return toast.error("Phone number must be 10 digits");
    }
    try {
      const payload = await verifyPhone({ phone: "+1" + localPhone }).unwrap();
      if (payload?.data?.invalid) {
        return toast.error(payload.data.message || "Invalid phone number");
      }
      toast.success("OTP sent to your phone");
      setIsOtpVisible(true);
    } catch (err) {
      toast.error(err?.data?.message || "Failed to send OTP");
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) return toast.error("OTP must be 6 digits");

    try {
      const payload = await verifyOtp({
        phone: "+1" + localPhone,
        otp,
      }).unwrap();
      if (payload?.invalid) {
        return toast.error(payload.message || "Invalid OTP");
      }
      toast.success("Phone verified!");
      setIsVerified(true);
      setIsOtpVisible(false);
      localStorage.setItem("phone-verified", "1");
    } catch (err) {
      toast.error(err?.data?.message || "Invalid OTP");
    }
  };

  const handleReset = () => {
    setIsVerified(false);
    setLocalPhone("");
    setPhone("+1");
    setOtp("");
    setIsOtpVisible(false);
    localStorage.removeItem("phone-verified");
  };

  return (
    <div>
      {/* US Flag + Phone input */}
      <Form.Item
        label="Phone Number"
        required
        validateStatus={localPhone.length !== 10 ? "error" : ""}
        help={localPhone.length !== 10 ? "Phone number must be 10 digits" : ""}
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 px-2 py-1 border border-gray-300 rounded">
            <span className="fi fi-us"></span>
            <span>+1</span>
          </div>

          <div className="relative flex-1">
            <Input
              placeholder="Enter 10-digit number"
              value={localPhone}
              onChange={handlePhoneChange}
              onPaste={handlePaste}
              maxLength={10}
              disabled={isVerified}
            />

            {!isVerified && localPhone.length === 10 && !isOtpVisible && (
              <Button
                type="primary"
                size="small"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white"
                loading={isVerifyPhoneLoading}
                onClick={handleSendVerify}
              >
                Verify
              </Button>
            )}

            {isVerified && (
              <>
                <span className="absolute right-10 top-1/2 -translate-y-1/2 text-green-600 font-bold">
                  Verified
                </span>
                <CgClose
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-red-500"
                  onClick={handleReset}
                />
              </>
            )}
          </div>
        </div>
      </Form.Item>

      {/* OTP input */}
      {isOtpVisible && (
        <Form.Item label="Enter OTP" required>
          <div className="flex gap-2">
            <Input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              style={{ width: 200 }}
            />
            <Button
              type="primary"
              loading={isVerifyOtpLoading}
              onClick={handleVerifyOtp}
            >
              Send
            </Button>
            <button
              disabled={isVerifyOtpLoading}
              onClick={handleReset}
              className="bg-red-500 hover:bg-red-400 rounded-md px-2 text-white"
            >
              Cancel
            </button>
          </div>
        </Form.Item>
      )}
    </div>
  );
};

export default PhoneInputWithUS;

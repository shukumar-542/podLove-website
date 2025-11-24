/* eslint-disable react/prop-types */
import { Form, Input, Select, Button } from "antd";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { toast } from "sonner";
import country from "../assets/CountryCodes.json";
import "flag-icons/css/flag-icons.min.css";
import {
  useVerifyPhoneMutation,
  useVerifyPhoneOtpMutation,
} from "../redux/Api/AuthApi";

const PhoneInputWithCountry = ({
  phone,
  setPhone,
  isVerified,
  setIsVerified,
}) => {
  const [selectedCountry, setSelectedCountry] = useState({
    name: "United States",
    dial_code: "+1",
    code: "US",
  });
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [otp, setOtp] = useState("");

  const [verifyPhone, { isLoading: isVerifyPhoneLoading }] =
    useVerifyPhoneMutation();
  const [verifyOtp, { isLoading: isVerifyOtpLoading }] =
    useVerifyPhoneOtpMutation();

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    if (isVerified) setIsVerified(false);
  };

  const handleSendVerify = async () => {
    if (!phone || phone.length < 6)
      return toast.error("Enter a valid phone number");

    try {
      await verifyPhone({ phone: selectedCountry?.dial_code + phone }).unwrap();
      toast.success("OTP sent!");
      setIsOtpVisible(true);
    } catch (err) {
      toast.error(err?.data?.message || "Failed to send OTP");
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 6) return toast.error("OTP must be 6 digits");

    try {
      await verifyOtp({
        phone: selectedCountry?.dial_code + phone,
        otp,
      }).unwrap();
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
    setPhone("");
    setOtp("");
    setIsOtpVisible(false);
    setSelectedCountry({
      name: "United States",
      dial_code: "+1",
      code: "US",
    });
    localStorage.removeItem("phone-verified");
  };

  return (
    <div>
      {/* Country + Phone input */}
      <Form.Item label="Phone Number" required>
        <div className="flex items-center gap-2">
          <Select
            disabled={isVerified}
            value={selectedCountry?.code}
            style={{
              width: 70,
            }}
            onChange={(value) => {
              const countryObj = country.find((c) => c.code === value);
              setSelectedCountry(countryObj);
              setPhone(countryObj.dial_code);
            }}
            popupMatchSelectWidth={false}
            dropdownStyle={{ width: 250 }}
            optionLabelProp="label"
          >
            {country.map((c) => (
              <Select.Option
                key={c.code}
                value={c.code}
                label={
                  <span className={`fi fi-${c.code.toLowerCase()} mr-2`}></span>
                }
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`fi fi-${c.code.toLowerCase()}`}></span>
                  <span className="flex-1">{c.code}</span>
                  <span>{c.dial_code}</span>
                </div>
              </Select.Option>
            ))}
          </Select>

          <div className="relative flex-1">
            <Input
              placeholder="Enter your phone number"
              value={phone}
              disabled={isVerified}
              onChange={handlePhoneChange}
            />

            {/* Verify Button */}
            {!isVerified && phone?.length >= 6 && !isOtpVisible && (
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

            {/* Verified Tag */}
            {isVerified && (
              <span className="absolute right-10 top-1/2 -translate-y-1/2 text-green-600 font-bold">
                Verified
              </span>
            )}

            {/* Close Button */}
            {isVerified && (
              <CgClose
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-red-500"
                onClick={handleReset}
              />
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
          </div>
        </Form.Item>
      )}
    </div>
  );
};

export default PhoneInputWithCountry;

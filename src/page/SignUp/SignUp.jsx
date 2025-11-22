import img from "../../assets/signUpBg.png";
import { Checkbox, Form, Input, Spin } from "antd";
import Password from "antd/es/input/Password";
import { NavLink, useNavigate } from "react-router";
import AuthButton from "../../component/AuthButton/AuthButton";
import { useSignUpMutation } from "../../redux/Api/AuthApi";
import { toast } from "sonner";
import { IoArrowBack } from "react-icons/io5";
import { useEffect, useState } from "react";
import TermsConditionModal from "../../component/Modals/TermsConditionModal";
import PrivacyPolicyModal from "../../component/Modals/PrivacyPolicyModal";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router";

const SignUp = () => {
  const [singUp, { isLoading }] = useSignUpMutation();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  // Local UI states
  const [isTermModalOpen, setIsTermModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [showVerify, setShowVerify] = useState(false);

  // Load saved form data + phone verification status
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("signup-form"));
    const phoneVerified = JSON.parse(localStorage.getItem("phone-verified"));

    if (savedData) {
      form.setFieldsValue(savedData);
      setPhone(savedData.phoneNumber);
      setShowVerify(savedData.phoneNumber.length >= 10);
    }

    if (phoneVerified === "1") {
      setIsVerified(true);
    }
  }, [form]);

  // Persist form changes
  const handleFormChange = (_, allValues) => {
    localStorage.setItem("signup-form", JSON.stringify(allValues));
  };

  // SignUp handler
  const handleSignUp = (values) => {
    if (!isVerified) {
      return toast.error("Please verify your phone number first.");
    }

    if (values.password !== values.confirmPassword) {
      return toast.error("Password does not match!");
    }

    singUp(values)
      .unwrap()
      .then((payload) => {
        localStorage.setItem("email", values.email);
        toast.success(payload.message);

        // Cleanup
        localStorage.removeItem("signup-form");
        localStorage.removeItem("phone-verified");

        navigate("/verify-otp");
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
      className="md:h-[100vh]"
    >
      <div className="bg-black absolute opacity-50 inset-0 z-0"></div>

      <Link href={`/`}>
        <IoArrowBack
          className="text-[#F26828] absolute top-10 left-10 cursor-pointer z-999 sm:block hidden"
          size={40}
        />
      </Link>

      <div className="flex items-center justify-start max-w-5xl mx-auto h-full p-2 md:p-0 relative z-10">
        <div className="bg-white shadow-2xl shadow-[#F26828] rounded-md p-5 md:p-10 max-w-5xl">
          <p className="text-4xl text-center font-bold text-[#333333]">
            Sign Up
          </p>
          <p className="mt-2 text-center">
            Just a few quick things to get started
          </p>

          <div className="flex gap-10">
            <div className="w-[250px] md:w-[450px]">
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSignUp}
                onValuesChange={handleFormChange}
              >
                {/* Name */}
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input placeholder="Enter your name here" />
                </Form.Item>

                {/* Email */}
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                >
                  <Input placeholder="Enter your email here" />
                </Form.Item>

                {/* Phone Number */}
                <Form.Item
                  label="Phone Number"
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                  ]}
                >
                  <div className="relative">
                    <Input
                      placeholder="Enter your number here"
                      value={phone}
                      disabled={isVerified}
                      onChange={(e) => {
                        const value = e.target.value;
                        setPhone(value);
                        setShowVerify(value.length >= 10); // show verify only after 10 digits
                        if (isVerified) setIsVerified(false);
                      }}
                    />

                    {showVerify && (
                      <button
                        type="button"
                        className={`absolute  top-1/2 -translate-y-1/2  px-1 py-0.5 text-xs rounded transition-colors ${
                          isVerified
                            ? "bg-green-500 right-9 text-white border-green-500 cursor-default"
                            : "text-white right-2 bg-blue-500 hover:bg-blue-400 "
                        }`}
                        disabled={isVerified}
                        onClick={() => setIsOtpVisible(true)}
                      >
                        {isVerified ? "Verified" : "Verify"}
                      </button>
                    )}

                    {isVerified && (
                      <button
                        onClick={() => {
                          setIsVerified(false);
                          localStorage.removeItem("phone-verified");
                        }}
                        className={`absolute right-2 top-1/2 -translate-y-1/2 text-black p-1 hover:text-red-500 text-sm rounded transition-colors`}
                      >
                        <CgClose />
                      </button>
                    )}
                  </div>
                </Form.Item>

                {/* OTP Input */}
                {isOtpVisible && (
                  <div className="flex items-center gap-3 -mt-3 mb-3">
                    <Input
                      placeholder="Enter OTP"
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="flex-1"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (otp === "123456") {
                          toast.success("Phone number verified successfully!");
                          setIsVerified(true);
                          setIsOtpVisible(false);
                          localStorage.setItem("phone-verified", "1");
                        } else {
                          toast.error("Invalid OTP");
                        }
                      }}
                      className="bg-blue-500 text-white px-4 py-1.5 rounded-md"
                    >
                      Send
                    </button>
                  </div>
                )}

                {/* Password */}
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please enter a password" },
                    {
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                      message:
                        "Must be 8+ chars, include upper & lower case letters, a number, and special character.",
                    },
                  ]}
                >
                  <Password placeholder="******" />
                </Form.Item>

                {/* Confirm Password */}
                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  dependencies={["password"]}
                  rules={[
                    { required: true, message: "Please confirm your password" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        return !value || getFieldValue("password") === value
                          ? Promise.resolve()
                          : Promise.reject(new Error("Passwords do not match"));
                      },
                    }),
                  ]}
                >
                  <Password placeholder="******" />
                </Form.Item>

                {/* Agreement */}
                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject("You must agree"),
                    },
                  ]}
                >
                  <Checkbox className="text-[#F68064]">
                    <span
                      className=" cursor-pointer text-[12px]"
                      onClick={() => setIsTermModalOpen(true)}
                    >
                      Terms and conditions
                    </span>
                    ,{" "}
                    <span
                      className="cursor-pointer text-[12px]"
                      onClick={() => setIsPrivacyModalOpen(true)}
                    >
                      Privacy policy
                    </span>
                    ,{" "}
                    <NavLink className="text-[12px]" to="/media-usage-consent">
                      Media Policy
                    </NavLink>
                    ,{" "}
                    <NavLink className="text-[12px]" to="/opt-in-policy">
                      Sms Policy
                    </NavLink>
                  </Checkbox>
                </Form.Item>

                <TermsConditionModal
                  isTermModalOpen={isTermModalOpen}
                  handleTermCancel={() => setIsTermModalOpen(false)}
                />

                <PrivacyPolicyModal
                  isPrivacyModalOpen={isPrivacyModalOpen}
                  handlePrivacyCancel={() => setIsPrivacyModalOpen(false)}
                />

                <AuthButton
                  disabled={isLoading}
                  className="bg-[#F68064] text-white w-full rounded-md py-2 text-xl shadow-md"
                >
                  {isLoading ? <Spin /> : "Sign Up"}
                </AuthButton>
              </Form>

              <p className="text-[#767676] text-center mt-2">
                Already have an account?{" "}
                <NavLink to="/login" className="text-[#F68064]">
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

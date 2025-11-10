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

const SignUp = () => {
  const [singUp, { isLoading }] = useSignUpMutation();
  const navigate = useNavigate();

  const [isTermModalOpen, setIsTermModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [showVerify, setShowVerify] = useState(false);
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [otp, setOtp] = useState("");

  const [form] = Form.useForm();

  // Load saved form data
  useEffect(() => {
    const savedData = localStorage.getItem("signup-form");
    if (savedData) {
      form.setFieldsValue(JSON.parse(savedData));
    }
  }, [form]);

  // Save form data on change
  const handleFormChange = (_, allValues) => {
    localStorage.setItem("signup-form", JSON.stringify(allValues));
  };

  const handleSignUp = (values) => {
    if (values?.password !== values?.confirmPassword) {
      return toast.error("Password does not match!");
    }

    singUp(values)
      .unwrap()
      .then((payload) => {
        localStorage.setItem("email", values.email);
        toast.success(payload.message);
        localStorage.removeItem("signup-form"); // clear saved form
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
      <a href={`/`}>
        <IoArrowBack
          className=" text-[#F26828] absolute top-10 left-10 cursor-pointer z-9999 hidden sm:block"
          size={40}
        />
      </a>

      <div className="flex items-center justify-start max-w-5xl mx-auto h-full p-2 md:p-0 z-10 relative">
        <div className="bg-white shadow-2xl shadow-[#F26828] rounded-md p-5 md:p-10 max-w-5xl">
          <p className="text-4xl text-center font-bold text-[#333333]">
            Sign Up
          </p>
          <p className="mt-2 text-center">
            Just a few quick things to get started
          </p>

          <div className="flex items-center justify-between gap-10">
            <div className="w-[250px] md:w-[450px]">
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSignUp}
                onValuesChange={handleFormChange}
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input placeholder="Enter your name here" />
                </Form.Item>

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
                        onClick={() => {
                          if (!isVerified) setIsOtpVisible(true);
                        }}
                      >
                        {isVerified ? "Verified" : "Verify"}
                      </button>
                    )}
                    {isVerified && (
                      <button
                        onClick={() => setIsVerified(false)}
                        className={`absolute right-2 top-1/2 -translate-y-1/2 text-black p-1 hover:text-red-500 text-sm rounded transition-colors`}
                      >
                        <CgClose />
                      </button>
                    )}
                  </div>
                </Form.Item>

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
                      onClick={async () => {
                        try {
                          // Simulate API call (replace this with real one)
                          // await verifyOtpApi({ phone, otp });
                          toast.success("Phone number verified successfully!");
                          setIsVerified(true);
                          setIsOtpVisible(false);
                        } catch {
                          toast.error("Invalid OTP. Please try again.");
                        }
                      }}
                      className="text-white bg-blue-500  rounded-md px-4 py-1.5 text-sm hover:bg-blue-400 transition"
                    >
                      Send
                    </button>
                  </div>
                )}

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

                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  dependencies={["password"]}
                  rules={[
                    { required: true, message: "Please confirm your password" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value)
                          return Promise.resolve();
                        return Promise.reject(
                          new Error("Passwords do not match")
                        );
                      },
                    }),
                  ]}
                >
                  <Password placeholder="******" />
                </Form.Item>

                <div className="flex justify-between items-center mb-3">
                  <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) =>
                          value
                            ? Promise.resolve()
                            : Promise.reject(new Error("You must agree")),
                      },
                    ]}
                  >
                    <div className="flex items-center gap-2">
                      <Checkbox className="text-xs"></Checkbox>
                      <div>
                        <span
                          className="text-[#F68064] cursor-pointer text-[12px]"
                          onClick={() => setIsTermModalOpen(true)}
                        >
                          Terms and conditions,{" "}
                        </span>
                        <span
                          className="text-[#F68064] cursor-pointer text-[12px]"
                          onClick={() => setIsPrivacyModalOpen(true)}
                        >
                          Privacy policy,{" "}
                        </span>
                        <NavLink
                          className="text-[#F68064] text-[12px]"
                          to="/media-usage-consent"
                        >
                          Media Policy,{" "}
                        </NavLink>
                        <NavLink
                          className="text-[#F68064] text-[12px]"
                          to="/opt-in-policy"
                        >
                          Sms Policy
                        </NavLink>
                      </div>
                    </div>
                  </Form.Item>
                </div>

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

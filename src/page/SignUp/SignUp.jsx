import img from "../../assets/signUpBg.png";
import { Checkbox, Form, Input, Spin } from "antd";
import Password from "antd/es/input/Password";
import { NavLink, useNavigate } from "react-router";
import AuthButton from "../../component/AuthButton/AuthButton";
import { useSignUpMutation } from "../../redux/Api/AuthApi";
import { toast } from "sonner";
const SignUp = () => {
  const [singUp, { isLoading }] = useSignUpMutation();
  const navigate = useNavigate();
  // ----Handle signup function------//
  const handleSignUp = (values) => {
    if (values?.password !== values?.confirmPassword) {
      return toast.error("Password does not match!");
    }

    singUp(values)
      .unwrap()
      .then((payload) => {
        localStorage.setItem("email", values.email);
        toast.success(payload.message);
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
                    {
                      type: "email",
                      message: "Please enter a valid email address",
                    },
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
                  <Input placeholder="Enter your number here" />
                </Form.Item>

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
                        "Password must be at least 8 characters, contain both letters (uppercase and lowercase), a number, and a special character.",
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
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("Passwords do not match")
                        );
                      },
                    }),
                  ]}
                >
                  <Password placeholder="******" />
                </Form.Item>

                {/* Terms and Conditions */}
                <div className="flex justify-between items-center mb-3">
                  <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) =>
                          value
                            ? Promise.resolve()
                            : Promise.reject(
                                new Error("You must agree to the terms")
                              ),
                      },
                    ]}
                  >
                    <Checkbox className="text-xs">
                      I agree with the{" "}
                      <span className="text-[#F68064] font-semibold">
                        <NavLink to="/terms-condition">terms and conditions</NavLink>
                      </span>
                      ,{" "}
                      <span className="text-[#F68064] font-semibold">
                        <NavLink to="/consumer-policy">Consumer Policy</NavLink>
                      </span>
                      , and{" "}
                      <span className="text-[#F68064] font-semibold">
                        <NavLink to="/media-policy">Media Policy</NavLink>
                      </span>
                    </Checkbox>
                  </Form.Item>
                </div>

                {/* Submit Button */}
                <AuthButton
                  disabled={isLoading}
                  className="bg-[#F68064] text-white w-full rounded-md py-2 text-xl shadow-md"
                >
                  {isLoading ? <Spin /> : "Sign Up"}
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

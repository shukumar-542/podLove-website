/* eslint-disable no-unused-vars */
import img from "../../assets/ForgotPassword.png";
import { Form, Input } from "antd";
import AuthButton from "../../component/AuthButton/AuthButton";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useForgetPasswordMutation } from "../../redux/Api/AuthApi";
const ForgetPassword = () => {
  const navigate = useNavigate();
  const [forgetPassword, { isLoading }] = useForgetPasswordMutation();
  const onFinish = (values) => {
    const data = {
      email: values?.email,
    };
    forgetPassword(data)
      .unwrap()
      .then((payload) => {
        // console.log("fulfilled", payload)
        toast.success("Please check you email!");
        localStorage.setItem("email", values.email);
        navigate("/verify-forget-otp");
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
      }}
      className="h-[100vh] relative"
    >
      {/* 🔹 Black Overlay (behind the content) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* 🔹 Content (above the overlay) */}
      <div className="flex items-center justify-start max-w-5xl mx-auto h-full p-2 md:p-0 relative z-10">
        <div className="bg-white shadow-2xl shadow-[#F26828] rounded-md p-5 md:p-10 max-w-5xl">
          <p className="text-2xl font-bold text-[#333333] text-center ">
            Reset Your PodLove Password
          </p>
          <p className="mt-2">
            We’ll email you a secure otp to reset your password
          </p>

          <Form layout="vertical mt-3" onFinish={onFinish}>
            <Form.Item label="Email" name={"email"}>
              <Input
                placeholder="Enter your email here"
                className="border-[#FFA175]"
              />
            </Form.Item>
            <AuthButton disabled={isLoading} className={"py-2"}>{isLoading ? "Loading..." : "Send"}</AuthButton>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

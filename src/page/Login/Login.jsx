import React from "react";
import img from "../../assets/loginBg.png";
import { Checkbox, Divider, Form, Input } from "antd";
import Password from "antd/es/input/Password";
import { FcGoogle } from "react-icons/fc";
import { Link, NavLink, useNavigate } from "react-router";
import { FaApple } from "react-icons/fa";
import AuthButton from "../../component/AuthButton/AuthButton";
import { useLoginUserMutation } from "../../redux/Api/AuthApi";
import { toast } from "sonner";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
const Login = () => {
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const handleUserLogin = async (values) => {
    try {
      const payload = await loginUser(values).unwrap();

      if (payload?.data?.accessToken) {
        localStorage.setItem("token", payload?.data?.accessToken);

        // Force a re-render
        window.location.href = "/home";
      }
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };


  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log(decoded);
    // console.log("Decoded Google User Info:", decoded);
    // Store in localStorage or dispatch to Redux

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
          <p className="text-4xl font-bold text-[#333333]">Welcome Back!</p>
          <p className="mt-2">Please log in to continue access</p>

          <div className=" w-[250px] md:w-[450px] ">
            <Form onFinish={handleUserLogin} layout="vertical">
              <Form.Item label="Email" name={"email"}>
                <Input placeholder="Enter your email here" />
              </Form.Item>
              <Form.Item label="Password" name={"password"}>
                <Password placeholder="******" />
              </Form.Item>
              <div className="flex justify-between items-center mb-3">
                <p>
                  <Checkbox /> Remember me
                </p>
                <Link to={"/forget-password"}>
                  <p className="text-[#F68064] cursor-pointer">
                    Forget password
                  </p>
                </Link>
              </div>
              <AuthButton className="bg-[#F68064] text-white w-full rounded-md py-2 text-xl shadow-md">
                Sign in
              </AuthButton>
            </Form>
            <Divider
              style={{
                borderColor: "#F68064",
              }}
            >
              Or
            </Divider>
            {/* <button className="border w-full mt-5 border-[#F68064] py-2 rounded-md text-[#767676] flex items-center justify-center gap-2">
              <FcGoogle size={25} />
              Continue with Google
            </button> */}
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            <button className="border w-full mt-5 border-[#F68064] py-2 rounded-md text-[#767676] flex items-center justify-center gap-2">
              <FaApple size={25} />
              Continue with apple
            </button>
            <p className="text-[#767676] text-center mt-2">
              Don't have an account?{" "}
              <NavLink to={"/sign-up"} className="text-[#F68064]">
                Sign Up
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

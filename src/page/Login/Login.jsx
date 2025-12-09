/* eslint-disable react/prop-types */
import img from "../../assets/loginBg.png";
import { Checkbox, Divider, Form, Input } from "antd";
import Password from "antd/es/input/Password";
import { Link, NavLink, useNavigate } from "react-router";
import { FaApple } from "react-icons/fa";
import AuthButton from "../../component/AuthButton/AuthButton";
import {
  useAppleLoginMutation,
  useGoogleLoginMutation,
  useLoginUserMutation,
} from "../../redux/Api/AuthApi";
import { toast } from "sonner";
import { GoogleLogin } from "@react-oauth/google";
import AppleSignin from "react-apple-signin-auth";
import { jwtDecode } from "jwt-decode";
import { IoArrowBack } from "react-icons/io5";
import { useEffect } from "react";

const Login = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [googleLogin] = useGoogleLoginMutation();
  const [appleLogin] = useAppleLoginMutation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("podlove-token");
    if (token) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  const handleUserLogin = async (values) => {
    try {
      const payload = await loginUser(values).unwrap();
      if (payload?.data?.accessToken) {
        localStorage.setItem("podlove-token", payload?.data?.accessToken);

        // Force a re-render
        window.location.href = "/home";
      }
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    const data = {
      googleId: decoded?.sub,
      name: decoded?.name,
      email: decoded?.email,
      avatar: decoded?.picture,
    };
    googleLogin(data)
      .unwrap()
      .then((payload) => {
        localStorage.setItem("podlove-token", payload?.data?.accessToken);
        toast.success(payload?.message);
        if (payload?.data?.user?.isProfileComplete) {
          navigate("/home");
        } else {
          navigate("/location");
        }
      })
      .catch((error) => toast.error(error?.data?.message));
  };

  const handleAppleSuccess = async (response) => {
    if (!response?.authorization?.code || !response?.authorization?.id_token) {
      toast.error("Apple sign-in response incomplete");
      return;
    }

    const decoded = jwtDecode(response.authorization.id_token);
    const payloadData = {
      appleCode: response?.authorization?.code,
      appleId: decoded?.sub,
      name: response?.user?.name
        ? response?.user?.name?.firstName + " " + response?.user?.name?.lastName
        : null,
      email: response?.user?.email ?? null,
    };

    appleLogin(payloadData)
      .unwrap()
      .then((payload) => {
        localStorage.setItem("podlove-token", payload?.data?.accessToken);
        toast.success(payload?.message);
        if (payload?.data?.user?.isProfileComplete) {
          navigate("/home");
        } else {
          navigate("/location");
        }
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
      className="min-h-dvh relative"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <Link to="/">
        <IoArrowBack
          me
          className=" text-[#F26828] absolute top-10 left-10 cursor-pointer z-9999"
          size={40}
        />
      </Link>

      <div className="flex items-center min-h-dvh justify-start max-w-5xl mx-auto p-2 md:p-0 relative z-10">
        <div className="bg-white shadow-2xl shadow-[#F26828] rounded-md p-5 md:p-10 w-full max-w-lg">
          {/* <p className="text-4xl font-bold text-[#333333]">Welcome Back!</p> */}
          <p className="text-4xl text-center font-bold text-[#333333]">
            Log in
          </p>
          {/* <p className="mt-2 text-center">Please log in to continue access</p> */}

          <div className="">
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
                <Link to={"/forgot-password"}>
                  <p className="text-[#F68064] cursor-pointer">
                    Forgot password
                  </p>
                </Link>
              </div>
              <AuthButton
                disabled={isLoading}
                className="bg-[#F68064] text-white w-full rounded-md py-2 text-xl shadow-md"
              >
                {isLoading ? "Loading..." : "Sign in"}
              </AuthButton>
            </Form>
            <Divider
              style={{
                borderColor: "#F68064",
              }}
            >
              Or
            </Divider>

            <div className=" flex items-center justify-center">
              <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => {}} />
            </div>

            <div className=" flex items-center justify-center">
              <AppleSignin
                authOptions={{
                  clientId: "co.podlove.web",
                  scope: "name email",
                  redirectURI: `${window.location.origin}/login`,
                  state: crypto.randomUUID(),
                  nonce: btoa(
                    crypto.getRandomValues(new Uint8Array(16)).toString()
                  ),
                  usePopup: true,
                }}
                onSuccess={handleAppleSuccess}
                onError={() => toast.error("Apple sign-in cancelled or failed")}
                render={(props) => (
                  <button
                    onClick={props.onClick}
                    className="border w-auto px-4 mt-5 border-[#F68064] py-2 rounded-md text-[#767676] flex items-center justify-center gap-2"
                  >
                    <FaApple size={25} />
                    Continue with Apple
                  </button>
                )}
              />
            </div>

            <p className="text-[#767676] text-center mt-2">
              Don&apos;t have an account?{" "}
              <NavLink to="/connection-pathway" className="text-[#F68064]">
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

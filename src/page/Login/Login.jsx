import img from "../../assets/loginBg.png";
import { Checkbox, Divider, Form, Input } from "antd";
import Password from "antd/es/input/Password";
import { Link, NavLink, useNavigate } from "react-router-dom"; // Fixed 'react-router' to 'react-router-dom'
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
        window.location.href = "/home";
      }
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  // Google and Apple success handlers unchanged...
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

      {/* --- Fixed Back Arrow Section --- */}
      <Link
        to="/"
        className="fixed top-6 left-6 md:top-10 md:left-10 z-[9999] bg-black/20 md:bg-transparent p-2 rounded-full backdrop-blur-sm md:backdrop-blur-none"
      >
        <IoArrowBack className="text-[#F26828] cursor-pointer" size={35} />
      </Link>

      {/* Added pt-20 for mobile so card doesn't touch the arrow */}
      <div className="flex items-center min-h-dvh justify-center md:justify-start max-w-5xl mx-auto p-4 md:p-0 pt-24 md:pt-0 relative z-10">
        <div className="bg-white shadow-2xl shadow-[#F26828]/50 rounded-xl p-6 md:p-10 w-full max-w-lg">
          <p className="text-4xl text-center font-bold text-[#333333] mb-8">
            Log in
          </p>

          <Form onFinish={handleUserLogin} layout="vertical">
            <Form.Item
              label="Email"
              name={"email"}
              rules={[{ required: true, message: "Email is required" }]}
            >
              <Input placeholder="Enter your email here" className="h-11" />
            </Form.Item>
            <Form.Item
              label="Password"
              name={"password"}
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Password placeholder="******" className="h-11" />
            </Form.Item>

            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Checkbox /> <span>Remember me</span>
              </div>
              <Link to={"/forgot-password"}>
                <p className="text-[#F68064] cursor-pointer hover:underline">
                  Forgot password
                </p>
              </Link>
            </div>

            <AuthButton
              disabled={isLoading}
              className="bg-[#F68064] text-white w-full rounded-md py-3 text-xl font-semibold shadow-md border-none"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </AuthButton>
          </Form>

          <Divider style={{ borderColor: "#F68064", margin: "24px 0" }}>
            Or
          </Divider>

          <div className="space-y-4">
            <div className="flex items-center justify-center w-full">
              <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => {}} />
            </div>

            <div className="flex items-center justify-center w-full">
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
                    className="border w-auto px-4 border-[#F68064] py-2 rounded-md text-[#767676] flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
                  >
                    <FaApple size={25} />
                    <span>Continue with Apple</span>
                  </button>
                )}
              />
            </div>
          </div>

          <p className="text-[#767676] text-center mt-6">
            Don&apos;t have an account?{" "}
            <NavLink
              to="/our-approach"
              className="text-[#F68064] font-bold hover:underline"
            >
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

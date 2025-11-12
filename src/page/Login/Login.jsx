/* eslint-disable react/prop-types */
import img from "../../assets/loginBg.png";
import { Checkbox, Divider, Form, Input } from "antd";
import Password from "antd/es/input/Password";
import { Link, NavLink, useNavigate } from "react-router";
import { FaApple } from "react-icons/fa";
import AuthButton from "../../component/AuthButton/AuthButton";
import {
  useGoogleLoginMutation,
  useLoginUserMutation,
} from "../../redux/Api/AuthApi";
import { toast } from "sonner";
import { GoogleLogin } from "@react-oauth/google";
import AppleSignin from "react-apple-signin-auth";
import { jwtDecode } from "jwt-decode";
import { IoArrowBack } from "react-icons/io5";

const Login = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [googleLogin] = useGoogleLoginMutation();
  const navigate = useNavigate();
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

  const handleLoginSuccess = (credentialResponse) => {
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

  // ================================ Apple ======================================
  // =============================================================================

  const handleAppleSuccess = async (response) => {
    try {
      // Extract the Apple tokens
      const code = response?.authorization?.code;
      const idToken = response?.authorization?.id_token;

      if (!code || !idToken) {
        toast.error("Apple sign-in response incomplete");
        return;
      }

      // Send tokens to backend to verify and exchange for your JWT
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/apple`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, id_token: idToken }),
      });

      const payload = await res.json();

      if (!res.ok) throw new Error(payload?.message || "Apple login failed");

      // Save token and redirect
      localStorage.setItem("podlove-token", payload?.data?.accessToken);
      toast.success(payload?.message || "Signed in with Apple");

      if (payload?.data?.user?.isProfileComplete) {
        window.location.href = "/home";
      } else {
        window.location.href = "/location";
      }
    } catch (err) {
      toast.error(err?.message || "Apple sign-in failed");
    }
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
      <a href={`/`}>
        <IoArrowBack
          me
          className=" text-[#F26828] absolute top-10 left-10 cursor-pointer z-9999 hidden sm:block"
          size={40}
        />
      </a>
      {/* 🔹 Content (above the overlay) */}
      <div className="flex items-center justify-start max-w-5xl mx-auto h-full p-2 md:p-0 relative z-10">
        <div className="bg-white shadow-2xl shadow-[#F26828] rounded-md p-5 md:p-10 max-w-5xl">
          {/* <p className="text-4xl font-bold text-[#333333]">Welcome Back!</p> */}
          <p className="text-4xl text-center font-bold text-[#333333]">
            Log in
          </p>
          {/* <p className="mt-2 text-center">Please log in to continue access</p> */}

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
              <GoogleLogin onSuccess={handleLoginSuccess} onError={() => {}} />
            </div>

            <div className=" flex items-center justify-center">
              <AppleSignin
                authOptions={{
                  clientId: "com.yourapp.web",
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

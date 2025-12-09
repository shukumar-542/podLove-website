import img from "../../assets/setPassword.png";
import { Form, Input, message } from "antd";
import { useNavigate } from "react-router";
import AuthButton from "../../component/AuthButton/AuthButton";
import { useResetAuthPasswordMutation } from "../../redux/Api/AuthApi";
import { useEffect } from "react";

const SetNewPassword = () => {
  const [resetAuthPassword, { isLoading }] = useResetAuthPasswordMutation();
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  useEffect(() => {
    const token = localStorage.getItem("podlove-token");
    if (token) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  const onFinish = (values) => {
    resetAuthPassword({
      email: email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    })
      .unwrap()
      .then(() => {
        message.success("Password updated successfully");
        navigate("/login");
      })
      .catch(() => {
        message.error("Failed to update password");
      });
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
        <div className="bg-white shadow-2xl shadow-[#F26828] rounded-md p-5 md:p-10 max-w-sm">
          <p className="text-2xl font-bold text-[#333333] text-center ">
            Set New Password
          </p>
          <p className="mt-2 w-[330px]"></p>

          <Form onFinish={onFinish} layout="vertical mt-5">
            {/* New Password */}
            <Form.Item
              label="New Password"
              name="password"
              rules={[
                { required: true, message: "Please enter a new password" },
                {
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
                  message:
                    "Password must be at least 8 characters, contain uppercase, lowercase, number, and special character.",
                },
              ]}
            >
              <Input.Password
                placeholder="New password"
                className="border-[#FFA175]"
              />
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
                    return Promise.reject(new Error("Passwords do not match"));
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="Confirm password"
                className="border-[#FFA175]"
              />
            </Form.Item>

            <AuthButton disabled={isLoading} className={"py-2"}>
              {isLoading ? "Loading..." : "Update Password"}
            </AuthButton>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;

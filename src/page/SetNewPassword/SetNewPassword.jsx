import img from "../../assets/setPassword.png";
import { Form, Input, message } from "antd";
import { useNavigate } from "react-router";
import AuthButton from "../../component/AuthButton/AuthButton";
import { useResetAuthPasswordMutation } from "../../redux/Api/AuthApi";

const SetNewPassword = () => {
  const [resetAuthPassword, { isLoading }] = useResetAuthPasswordMutation();
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
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
        <div className="bg-white shadow-2xl shadow-[#F26828] rounded-md p-5 md:p-10 max-w-5xl">
          <p className="text-2xl font-bold text-[#333333] text-center ">
            Set New Password
          </p>
          <p className="mt-2 w-[330px]"></p>

          <Form onFinish={onFinish} layout="vertical mt-5">
            <Form.Item name="password" label="New Password">
              <Input.Password
                placeholder="New password"
                className="border-[#FFA175]"
              />
            </Form.Item>
            <Form.Item name="confirmPassword" label="Confirm Password">
              <Input.Password
                placeholder="Confirm Password"
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

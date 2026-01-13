import { Button, ConfigProvider, Card } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import img1 from "../../assets/podLogo.png";

export default function OurApproach() {
  const navigate = useNavigate();

  // Secure Logic: Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("podlove-token");
    if (token) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: { colorPrimary: "rgb(255,161,117)" },
        },
      }}
    >
      <div className="min-h-screen bg-[#ffa175] flex items-center justify-center py-12 px-3 relative">
        <Link to="/" className="absolute top-10 left-10 z-[9999]">
          <IoArrowBack size={30} className="text-white cursor-pointer" />
        </Link>

        <Card className="w-full max-w-3xl shadow-lg rounded-2xl text-center p-5">
          <div className="flex flex-col items-center">
            <NavLink to="/">
              <img className="h-8 md:h-10 " src={img1} alt="Logo" />
            </NavLink>
            <h1 className="text-3xl font-bold text-gray-600 my-6">
              Our Approach to Love
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-12">
              PodLove is grounded in fostering authentic, meaningful connections
              beyond surface-level preferences. While we understand some people
              have specific preferences, our goal is to help you find love where
              it might be least expected.
            </p>

            <Button
              type="primary"
              size="large"
              block
              className="h-12 text-lg font-semibold"
              style={{ background: "#ffa175", borderColor: "#ffa175" }}
              onClick={() => navigate("/what-to-expect")}
            >
              Next
            </Button>
          </div>
        </Card>
      </div>
    </ConfigProvider>
  );
}

import { useEffect, useState } from "react";
import bg from "../../assets/connection-bg.png";
import { useNavigate } from "react-router";
import { Progress } from "antd";
import { useConnectBeginsMutation } from "../../redux/Api/AuthApi";
import { toast } from "sonner";

const ConnectionProgress = () => {
  const [percent, setPercent] = useState(1);
  const [errorMessage, setErrorMessage] = useState(null);
  const [connectBegins] = useConnectBeginsMutation();
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("podlove-token");
    if (!token) {
      navigate("/login", { replace: true });
    } else {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  // Progress timer
  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // API trigger at 70%
  useEffect(() => {
    if (percent === 70) {
      connectBegins(userId)
        .unwrap()
        .then((payload) => {
          toast.success(payload?.message);
          if (payload?.success) {
            navigate("/congratulation");
          } else {
            navigate("/match-result");
          }
        })
        .catch((error) => {
          const msg = error?.data?.message?.includes("Cast to ObjectId failed")
            ? "Invalid user reference. Please try again or contact support."
            : error?.data?.message || "Something went wrong. Please try again.";

          toast.error(msg);
          setErrorMessage(msg);
        });
    }
  }, [percent, navigate]);

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        imageRendering: "high-quality",
      }}
      className="h-[100vh] relative"
    >
      {/* Overlay */}
      <div className="bg-black absolute opacity-50 inset-0 z-0" />

      <div className="grid grid-cols-12 items-center justify-center h-full w-full container mx-auto">
        <div className="md:col-span-1"></div>

        {/* Main Content */}
        <div className="bg-white shadow-5xl rounded-md p-5 md:p-10 col-span-12 md:col-span-5 z-10 mx-2 md:mx-0 text-center">
          <h1 className="font-poppins font-semibold text-3xl md:text-4xl">
            Your Connection Begins Here
          </h1>
          <p className="max-w-80 mx-auto mt-2 text-gray-700">
            Our smart AI connector is working hard to find the best matches for
            you.
          </p>

          <div className="flex justify-center my-10">
            <Progress
              type="circle"
              percent={percent}
              strokeWidth={12}
              size={180}
            />
          </div>

          {errorMessage ? (
            <div className="space-y-4">
              <p className="text-red-500 font-medium">{errorMessage}</p>
              <button
                onClick={() => navigate("/home")}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition-all duration-200"
              >
                Go Back Home
              </button>
            </div>
          ) : (
            percent < 100 && <p className="text-gray-600">Finding matches...</p>
          )}
        </div>

        <div className="md:col-span-6"></div>
      </div>
    </div>
  );
};

export default ConnectionProgress;

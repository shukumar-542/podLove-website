import { useEffect, useState } from "react";
import bg from "../../assets/connection-bg.png";
import { useNavigate } from "react-router";
import { Progress } from "antd";
import { useConnectBeginsMutation } from "../../redux/Api/AuthApi";
import { toast } from "sonner";
// import { jwtDecode } from "jwt-decode";

const ConnectionProgress = () => {
  const [percent, setPercent] = useState(1);
  const [connectBegins] = useConnectBeginsMutation();
  // const token = localStorage.getItem("podlove-token");
  // console.log(token);
  // const decoded = jwtDecode(token);
  // console.log(decoded?.id);
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  //   Percentage timer
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

  //   Navigate congratulation page
  useEffect(() => {
    if (percent === 70
    ) {
      connectBegins(userId)
        .unwrap()
        .then((payload) => {
          toast.success(payload?.message);
          navigate("/congratulation");
        })
        .catch((error) => toast.error(error?.data?.message));
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
      className="h-[100vh]  relative   "
    >
      {/* Opacity section */}
      <div className="bg-black absolute opacity-50 inset-0 z-0 "></div>
      {/* Grid divide by 12 column */}
      <div className="grid grid-cols-12 items-center justify-center h-full w-full container mx-auto">
        <div className="  md:col-span-1"></div>
        {/* Main content */}
        <div className="bg-white shadow-5xl  rounded-md  p-5 md:p-10 col-span-12 md:col-span-5 z-10 mx-2 md:mx-0">
          <h1 className="text-center font-poppins font-semibold text-4xl">
            Your Connection Begins Here
          </h1>
          <p className="text-center max-w-80 mx-auto mt-2">
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

          {percent < 100 && <p className="text-center">Finding matches...</p>}
        </div>

        {/* Space after content */}
        <div className="md:col-span-6"></div>
      </div>
    </div>
  );
};

export default ConnectionProgress;

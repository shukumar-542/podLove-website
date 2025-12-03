import bg from "../../assets/102.png";
import { CiLocationOn } from "react-icons/ci";
import { IoCalendarOutline, IoSettingsOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import { useGetUserQuery } from "../../redux/Api/AuthApi";
import { baseUrl } from "../../baseUrl";
import { PiSignOutBold } from "react-icons/pi";
import { Popconfirm } from "antd";
import { formatDate } from "../../helpers/formatDate";
const Profile = () => {
  const { data: getUser } = useGetUserQuery();
  const navigate = useNavigate();
  const confirm = () => {
    localStorage.removeItem("podlove-token");
    navigate("/login");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="h-[100vh] px-2 md:px-0 relative"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className=" flex justify-center items-center h-full">
        <div className="bg-white md:flex gap-10 p-8 md:p-10 rounded-tr-[90px] rounded-bl-[90px] shadow-2xl shadow-[#eb8b73] mb-32 md:mb-20 z-10">
          <div>
            <img
              src={`${baseUrl}${getUser?.data?.avatar}`}
              className="h-[200px] md:h-[300px] w-[200px] md:w-[284px] md:relative md:-mt-24 rounded-md object-cover"
              alt=""
            />
            <p className="mt-3 flex  items-center gap-1 text-[#6B4431]">
              <IoCalendarOutline /> Joined{" "}
              {getUser?.data?.createdAt
                ?.split("T")[0]
                ?.split("-")
                ?.slice(1)
                .concat(
                  getUser?.data?.createdAt
                    ?.split("T")[0]
                    ?.split("-")
                    .slice(0, 1)
                )
                ?.join("-")}
            </p>
            <p className="flex mt-1 items-center gap-1 text-[#6B4431]">
              <CiLocationOn color="#6B4431" />
              {getUser?.data?.location?.place || "N/A"}
            </p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="text-[#8C5940] font-poppins flex-1 text-2xl md:text-[36px] pr-3 md:pr-10 font-bold ">
                {getUser?.data?.name}
              </p>
              <div className=" flex items-center justify-center gap-3">
                <Link to={"/edit-profile"}>
                  <div className="bg-[#FFA175] text-white p-2 rounded-md shadow-lg cursor-pointer">
                    <FiEdit />
                  </div>
                </Link>
                <Link
                  to={"/change-password"}
                  className="bg-[#FFA175] text-white p-2 rounded-md shadow-lg cursor-pointer"
                >
                  <IoSettingsOutline />
                </Link>
                <Popconfirm
                  title="Log Out"
                  description="Are you sure to log out?"
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <button className="bg-[#FFA175] text-white p-2 rounded-md shadow-lg">
                    <PiSignOutBold />
                  </button>
                </Popconfirm>
              </div>
            </div>
            <p>{getUser?.data?.email}</p>
            <div className="mt-5 space-y-3 ">
              <p className="flex justify-between">
                <span>Gender</span>{" "}
                <span className="text-[#767676] capitalize">
                  {getUser?.data?.gender}
                </span>
              </p>

              <p className="flex justify-between">
                <span>Age</span>{" "}
                <span className="text-[#767676]">
                  {formatDate(getUser?.data?.dateOfBirth)}
                </span>
              </p>

              <p className="flex justify-between gap-20">
                <span>Phone</span>{" "}
                <span className="text-[#767676]">
                  {getUser?.data?.phoneNumber}
                </span>
              </p>
            </div>
            <p
              className="mt-4
            "
            >
              Bio:
            </p>
            <p className="bg-[#FFE2D4] max-w-md p-2 mt-2 rounded-md shadow-lg h-32 overflow-y-auto">
              {getUser?.data?.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

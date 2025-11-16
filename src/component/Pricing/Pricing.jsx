/* eslint-disable react/prop-types */
import subscription from "../../assets/subscription-bg.png";
import { IoCheckmarkOutline } from "react-icons/io5";
import { Divider } from "antd";
import { useUpgradeSubscriptionPlanMutation } from "../../redux/Api/SubscriptionPlan";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router";
const Pricing = ({ subscriptions, buttonDisabled, activePlan }) => {
  const [upgradeSubscription, { isLoading }] =
    useUpgradeSubscriptionPlanMutation();
  const navigate = useNavigate();
  const logInUser = localStorage.getItem("podlove-token");
  // Handle upgrade plan function

  const handleUpdatePlan = (plan) => {
    const data = {
      planId: plan?._id,
    };
    if (plan?.unitAmount === "0") {
      navigate("/connection-progress");
    } else {
      upgradeSubscription(data)
        .unwrap()
        .then((payload) => {
          if (payload?.data) {
            const newWindow = window.open("", "_blank");
            newWindow.location.href = payload.data;
          }
        })
        .catch((error) => toast.error(error?.data?.message));
    }
  };

  return (
    <section className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 my-10  mx-auto font-poppins mr-2 md:mr-0 ml-2 md:ml-0 ">
      {subscriptions?.map((plan) => {
        return (
          <div
            key={plan?._id}
            style={{
              backgroundImage: `url(${subscription})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
            }}
            className="rounded-3xl overflow-hidden relative text-white p-4 py-8 shadow-2xl shadow-black"
          >
            {plan.name === activePlan.plan && <p className="ribbon">Active</p>}
            <p className="text-center bg-[#231A19] text-[20px] py-2  rounded-full max-w-[120px]  mx-auto">
              {plan?.name?.split(":")[0]}
            </p>

            {/* <p className=" my-2 mt-10 ">{plan?.name}</p> */}

            <div className="space-y-2 pb-5 mt-5 min-auto">
              {plan?.description?.map((det) => {
                return (
                  <p
                    key={det?._id}
                    className="flex items-center gap-2 font-thin"
                  >
                    <IoCheckmarkOutline size={16} color="#FFA175" />
                    {det?.key}
                  </p>
                );
              })}
            </div>
            <h1 className=" text-3xl font-bold my-5">
              {plan?.unitAmount == "0"
                ? "Free"
                : `$${plan.unitAmount} / ${plan?.interval}`}
            </h1>
            <div className="text-center">
              {/* {"0" == "0" ? ( */}
              {plan?.unitAmount == "0" ? (
                <Link to={"/connection-progress"}>
                  <button
                    disabled={buttonDisabled}
                    className=" bg-gradient-to-r from-[#F36E2F] to-[#FEB491]  shadow-white shadow-inner rounded-full w-full mt-5 py-2 max-w-xs  mb-5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Free Plan
                  </button>
                </Link>
              ) : (
                <div className=" text-center">
                  {logInUser ? (
                    <button
                      onClick={() => handleUpdatePlan(plan)}
                      disabled={isLoading}
                      className=" bg-gradient-to-r from-[#F36E2F] to-[#FEB491]  shadow-white shadow-inner rounded-full w-full mt-5 py-2 max-w-xs  mb-5"
                    >
                      Choose this plan
                    </button>
                  ) : (
                    <a href={`/login`}>
                      <button
                        disabled={isLoading}
                        className=" bg-gradient-to-r from-[#F36E2F] to-[#FEB491]  shadow-white shadow-inner rounded-full w-full mt-5 py-2 max-w-xs  mb-5"
                      >
                        Choose this plan
                      </button>
                    </a>
                  )}
                </div>
              )}
            </div>
            <Divider
              style={{
                borderColor: "#2D2D30",
              }}
            >
              <p className=" text-[#d1d1d1]">Details</p>
            </Divider>

            <div className="space-y-3 ">
              {plan?.description?.map((details) => {
                return (
                  <p
                    key={details?._id}
                    className="flex items-center gap-2 font-poppins text-[13px]"
                  >
                    <IoCheckmarkOutline size={20} color="" />
                    {details?.details}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Pricing;

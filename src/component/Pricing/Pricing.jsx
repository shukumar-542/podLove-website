"use client";

import subscription from "../../assets/subscription-bg.png";
import { IoCheckmarkOutline } from "react-icons/io5";
import { Divider } from "antd";
import {
  useGetAllPlanQuery,
  useUpgradeSubscriptionPlanMutation,
  useUpdateUserSubscriptionMutation,
} from "../../redux/Api/SubscriptionPlan";
import { useGetUserQuery } from "../../redux/Api/AuthApi";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { Skeleton } from "antd";

const Pricing = () => {
  const navigate = useNavigate();
  const logInUser = localStorage.getItem("podlove-token");

  // ---------------- QUERIES ----------------
  const {
    data: userData,
    isLoading: isUserLoading,
    isFetching: isUserFetching,
  } = useGetUserQuery();
  const {
    data: allPlansResponse,
    isLoading: isPlanLoading,
    isFetching: isPlanFetching,
  } = useGetAllPlanQuery();

  const [upgradeSubscription, { isLoading: isUpgradeLoading }] =
    useUpgradeSubscriptionPlanMutation();
  const [updateUserSubscription, { isLoading: isUpdateLoading }] =
    useUpdateUserSubscriptionMutation();

  const isAnyMutationLoading = isUpgradeLoading || isUpdateLoading;

  const isLoading =
    isUserLoading || isUserFetching || isPlanLoading || isPlanFetching;

  // ---------------- DATA ----------------
  const subscriptions = allPlansResponse?.data || [];
  const userSubscription = userData?.data?.subscription;
  const activePlanName = userSubscription?.plan;
  const isSubscriptionActive = userSubscription?.status === "ACTIVE";
  const userId = userData?.data?._id;

  // ---------------- HANDLER ----------------
  const handleUpdatePlan = (plan) => {
    if (!logInUser) {
      navigate("/login");
      return;
    }

    const isFree = plan?.unitAmount === "0" || plan?.unitAmount === 0;

    if (!isSubscriptionActive && isFree) {
      updateUserSubscription({ userId, subscriptionPlanId: plan?._id })
        .unwrap()
        .then(() => {
          navigate("/home");
          toast.success("Free plan activated successfully");
        })
        .catch((error) =>
          toast.error(error?.data?.message || "Something went wrong"),
        );
      return;
    }

    if (isSubscriptionActive && plan?.name === activePlanName) return;

    upgradeSubscription({ planId: plan?._id })
      .unwrap()
      .then((payload) => {
        if (payload?.data) {
          window.location.href = payload.data;
        }
      })
      .catch((error) =>
        toast.error(error?.data?.message || "Something went wrong"),
      );
  };

  // ---------------- UI ----------------
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 mx-auto font-poppins px-4 md:px-0">
      {isLoading
        ? Array(3)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="rounded-3xl overflow-hidden relative text-white p-4 py-8 shadow-2xl shadow-black border-2 animate-pulse"
                style={{ background: "#2D2D30", height: "400px" }}
              >
                <Skeleton.Input className="w-32 mb-4" active size="small" />
                <Skeleton.Input className="w-20 mb-6" active size="small" />
                <Skeleton paragraph={{ rows: 4 }} active />
                <Skeleton.Button className="w-full mt-6" active />
              </div>
            ))
        : subscriptions.map((plan, index) => {
            const isFree = plan?.unitAmount === "0" || plan?.unitAmount === 0;
            const isActive =
              isSubscriptionActive && plan?.name === activePlanName;
            const isBtnDisabled = isActive || isAnyMutationLoading;

            return (
              <div
                key={plan?._id || index}
                style={{
                  backgroundImage: `url(${subscription})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "100%",
                }}
                className={`rounded-3xl overflow-hidden relative text-white p-4 py-8 shadow-2xl shadow-black border-2 transition-all duration-300 ${
                  isActive ? "border-[#F36E2F] scale-105" : "border-transparent"
                }`}
              >
                {/* CURRENT badge */}
                {isActive && (
                  <div className="absolute top-5 right-[-35px] bg-[#F36E2F] text-white px-12 py-1 rotate-45 text-[12px] font-bold shadow-lg z-10">
                    CURRENT
                  </div>
                )}

                <p className="text-center bg-[#231A19] text-[18px] py-2 rounded-full max-w-[140px] mx-auto capitalize font-medium tracking-wide">
                  {plan?.name}
                </p>

                {/* Top Features */}
                <div className="space-y-2 pb-5 mt-8 min-h-[130px]">
                  {plan?.description?.slice(0, 4).map((det, idx) => (
                    <p
                      key={idx}
                      className="flex items-center gap-2 font-light text-sm"
                    >
                      <IoCheckmarkOutline size={16} color="#FFA175" />
                      {det?.key}
                    </p>
                  ))}
                </div>

                {/* Price */}
                <h1 className="text-3xl font-bold my-5">
                  {isFree ? "Free" : `$${plan.unitAmount} / ${plan?.interval}`}
                </h1>

                {/* Action Button */}
                <div className="text-center">
                  <button
                    onClick={() => handleUpdatePlan(plan)}
                    disabled={isBtnDisabled}
                    className={`w-full py-3 rounded-full font-semibold transition-all shadow-inner max-w-xs mb-5 
                      ${
                        isBtnDisabled
                          ? "bg-[#333] text-gray-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-[#F36E2F] to-[#FEB491] hover:brightness-110 active:scale-95 cursor-pointer text-white"
                      } 
                      disabled:opacity-80`}
                  >
                    {isAnyMutationLoading
                      ? "Processing..."
                      : isActive
                        ? "Your Current Plan"
                        : isFree
                          ? "Activate Free Plan"
                          : "Choose this plan"}
                  </button>
                </div>

                <Divider style={{ borderColor: "#2D2D30" }}>
                  <p className="text-[#d1d1d1] text-xs">Full Details</p>
                </Divider>

                {/* Bottom Details */}
                <div className="space-y-3">
                  <p className="flex items-start gap-2 text-[13px] text-gray-300">
                    {plan?.description[0]?.details}
                  </p>
                </div>
              </div>
            );
          })}
    </section>
  );
};

export default Pricing;

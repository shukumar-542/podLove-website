"use client";

import { useEffect, useMemo, useState } from "react";
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
import { useLocation, useNavigate } from "react-router";

const Pricing = ({ paidCtaLabel = "Choose this plan" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const logInUser = localStorage.getItem("podlove-token");
  const [loadingPlanId, setLoadingPlanId] = useState(null);

  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  );

  const returnToParam = searchParams.get("return_to");
  const userIdParam = searchParams.get("user_id");

  useEffect(() => {
    if (returnToParam) {
      sessionStorage.setItem("podlove-return-to", returnToParam);
    }
    if (userIdParam) {
      sessionStorage.setItem("podlove-return-user", userIdParam);
    }
  }, [returnToParam, userIdParam]);

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
  const isSubscriptionActive =
    userSubscription?.status === "ACTIVE" ||
    userSubscription?.status === "PAID";
  const userId = userData?.data?._id;

  // ---------------- HANDLER ----------------
  const handleUpdatePlan = (plan) => {
    if (!logInUser) {
      navigate("/login");
      return;
    }

    if (isAnyMutationLoading) {
      return;
    }

    const isFree = plan?.unitAmount === "0" || plan?.unitAmount === 0;
    const isActive = isSubscriptionActive && plan?.name === activePlanName;

    if (isActive) {
      return;
    }

    setLoadingPlanId(plan?._id);

    if (!isSubscriptionActive && isFree) {
      updateUserSubscription({ userId, subscriptionPlanId: plan?._id })
        .unwrap()
        .then(() => {
          navigate("/home");
          toast.success("Free plan activated successfully");
          setLoadingPlanId(null);
        })
        .catch((error) => {
          toast.error(error?.data?.message || "Something went wrong");
          setLoadingPlanId(null);
        });
      return;
    }

    const returnTo =
      returnToParam || sessionStorage.getItem("podlove-return-to") || "";

    upgradeSubscription({
      planId: plan?._id,
      returnTo,
    })
      .unwrap()
      .then((payload) => {
        const redirectUrl =
          payload?.data?.url ||
          payload?.data?.checkoutUrl ||
          payload?.data ||
          "";
        if (redirectUrl) {
          window.location.href = redirectUrl;
        }
        setLoadingPlanId(null);
      })
      .catch((error) => {
        toast.error(error?.data?.message || "Something went wrong");
        setLoadingPlanId(null);
      });
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
                style={{
                  backgroundImage: `url(${subscription})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "100%",
                }}
                className="rounded-3xl overflow-hidden relative text-white p-4 py-8 shadow-2xl shadow-black border-2 border-transparent"
              >
                {/* Plan Name Badge */}
                <div className="flex justify-center mb-8">
                  <div className="bg-[#231A19] bg-opacity-50 h-10 w-32 rounded-full animate-pulse"></div>
                </div>

                {/* Features List */}
                <div className="space-y-2 pb-5 min-h-[130px]">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#FFA175] bg-opacity-30 rounded-full animate-pulse"></div>
                      <div className="h-3 bg-white bg-opacity-20 rounded animate-pulse flex-1"></div>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="my-5">
                  <div className="h-9 w-40 bg-white bg-opacity-30 rounded animate-pulse"></div>
                </div>

                {/* Button */}
                <div className="text-center mb-5">
                  <div className="w-full max-w-xs mx-auto h-12 bg-gradient-to-r from-[#F36E2F] to-[#FEB491] opacity-50 rounded-full animate-pulse"></div>
                </div>

                {/* Divider */}
                <div className="my-5">
                  <div className="h-px bg-[#2D2D30] mb-2"></div>
                  <div className="h-3 w-20 bg-white bg-opacity-20 rounded animate-pulse mx-auto"></div>
                  <div className="h-px bg-[#2D2D30] mt-2"></div>
                </div>

                {/* Bottom Details */}
                <div className="space-y-2">
                  <div className="h-3 bg-white bg-opacity-20 rounded animate-pulse"></div>
                  <div className="h-3 bg-white bg-opacity-20 rounded animate-pulse w-3/4"></div>
                </div>
              </div>
            ))
        : subscriptions.map((plan, index) => {
            const isFree = plan?.unitAmount === "0" || plan?.unitAmount === 0;
            const isActive =
              isSubscriptionActive && plan?.name === activePlanName;
            const isLoadingThisPlan = loadingPlanId === plan?._id;
            const isBtnDisabled =
              isActive || isLoadingThisPlan || (isFree && isSubscriptionActive);

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
                    {isLoadingThisPlan
                      ? "Processing..."
                      : isActive
                        ? "Your Current Plan"
                        : isFree
                          ? "Activate Free Plan"
                          : paidCtaLabel}
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

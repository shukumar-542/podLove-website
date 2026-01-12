import subscription from "../../assets/subscription-bg.png";
import { IoCheckmarkOutline } from "react-icons/io5";
import { Divider } from "antd";
import {
  useGetAllPlanQuery,
  useUpgradeSubscriptionPlanMutation,
} from "../../redux/Api/SubscriptionPlan";
import { useGetSubscriptionsQuery } from "../../redux/Api/AuthApi";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const Pricing = () => {
  const { data: allPlansResponse } = useGetAllPlanQuery();
  const { data: activePlanData } = useGetSubscriptionsQuery();

  const [upgradeSubscription, { isLoading }] =
    useUpgradeSubscriptionPlanMutation();
  const navigate = useNavigate();
  const logInUser = localStorage.getItem("podlove-token");

  // Data extraction
  const subscriptions = allPlansResponse?.data || [];
  const activePlanName = activePlanData?.plan;

  const handleUpdatePlan = (plan) => {
    if (!logInUser) {
      navigate("/login");
      return;
    }

    if (plan?.name === activePlanName || plan?.unitAmount === "0") {
      return;
    }

    const data = {
      planId: plan?._id,
    };

    upgradeSubscription(data)
      .unwrap()
      .then((payload) => {
        if (payload?.data) {
          // Stripe/Payment gateway redirect
          window.location.href = payload.data;
        }
      })
      .catch((error) =>
        toast.error(error?.data?.message || "Something went wrong")
      );
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 mx-auto font-poppins px-4 md:px-0">
      {subscriptions?.map((plan, index) => {
        // --- LOGIC SECTION ---
        const isActive = plan?.name === activePlanName;
        const isFree = plan?.unitAmount === "0" || plan?.unitAmount === 0;

        const isBtnDisabled = isActive || (isFree && logInUser) || isLoading;

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
            {/* Active Plan Badge */}
            {isActive && (
              <div className="absolute top-5 right-[-35px] bg-[#F36E2F] text-white px-12 py-1 rotate-45 text-[12px] font-bold shadow-lg z-10">
                CURRENT
              </div>
            )}

            <p className="text-center bg-[#231A19] text-[18px] py-2 rounded-full max-w-[140px] mx-auto capitalize font-medium tracking-wide">
              {plan?.name}
            </p>

            {/* Top Feature Summary */}
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

            {/* Price Display */}
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
                    isActive || isFree
                      ? "bg-[#333] text-gray-400 cursor-not-allowed" // Current or Free plan style
                      : "bg-gradient-to-r from-[#F36E2F] to-[#FEB491] hover:brightness-110 active:scale-95 cursor-pointer text-white" // Available plans
                  } 
                  disabled:opacity-80`}
              >
                {isActive
                  ? "Your Current Plan"
                  : isFree
                  ? "Free Plan"
                  : "Choose this plan"}
              </button>
            </div>

            <Divider style={{ borderColor: "#2D2D30" }}>
              <p className="text-[#d1d1d1] text-xs">Full Details</p>
            </Divider>

            {/* Bottom Detailed Features */}
            <div className="space-y-3">
              {plan?.description?.map((details, idx) => (
                <p
                  key={idx}
                  className="flex items-start gap-2 text-[13px] text-gray-300"
                >
                  <IoCheckmarkOutline
                    size={18}
                    className="text-[#FFA175] mt-0.5 flex-shrink-0"
                  />
                  {details?.details}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Pricing;

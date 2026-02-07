import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router";

const SubscribeSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { returnTo, returnUserId } = useMemo(() => {
    const params = new URLSearchParams(location.search);
    const returnToParam =
      params.get("return_to") ||
      sessionStorage.getItem("podlove-return-to") ||
      "home";
    const userIdParam =
      params.get("user_id") || sessionStorage.getItem("podlove-return-user");

    return {
      returnTo: returnToParam,
      returnUserId: userIdParam || "",
    };
  }, [location.search]);

  const deepLink = useMemo(() => {
    const link = new URL("podlove://open");
    if (returnTo) {
      link.searchParams.set("screen", returnTo);
    }
    if (returnUserId) {
      link.searchParams.set("user_id", returnUserId);
    }
    return link.toString();
  }, [returnTo, returnUserId]);

  const handleContinue = () => {
    window.location.href = deepLink;
  };

  const handleChoosePlan = () => {
    const search = new URLSearchParams();
    if (returnTo) {
      search.set("return_to", returnTo);
    }
    if (returnUserId) {
      search.set("user_id", returnUserId);
    }
    navigate(`/subscribe${search.toString() ? `?${search.toString()}` : ""}`);
  };

  return (
    <div className="bg-[#F7E8E1] min-h-dvh flex items-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="text-4xl md:text-5xl font-bold">
          You&apos;re all set!
        </div>
        <p className="mt-4 text-sm md:text-base text-[#4A3F3F]">
          Premium features are ready for you.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={handleContinue}
            className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-[#F36E2F] to-[#FEB491] text-white hover:brightness-110 active:scale-95"
          >
            Continue
          </button>
          <button
            type="button"
            onClick={handleChoosePlan}
            className="px-8 py-3 rounded-full font-semibold border border-[#F36E2F] text-[#F36E2F] hover:bg-[#F36E2F] hover:text-white active:scale-95"
          >
            View Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSuccess;

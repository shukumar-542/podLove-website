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

  const { returnPath, returnQuery, isExternalReturn } = useMemo(() => {
    const rawPath = returnTo || "home";
    const isExternal = /^https?:\/\//i.test(rawPath);
    const safePath = rawPath.startsWith("/") ? rawPath : `/${rawPath}`;
    const search = new URLSearchParams();

    if (returnUserId) {
      search.set("user_id", returnUserId);
    }

    return {
      returnPath: isExternal ? rawPath : safePath,
      returnQuery: search.toString(),
      isExternalReturn: isExternal,
    };
  }, [returnTo, returnUserId]);

  const handleContinue = () => {
    if (isExternalReturn) {
      window.location.href = returnPath;
      return;
    }

    navigate(`${returnPath}${returnQuery ? `?${returnQuery}` : ""}`);
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
          Subscription Successful!
        </div>
        <p className="mt-4 text-sm md:text-base text-[#4A3F3F]">
          Thank you for subscribing! You now have access to all the great
          features. You can continue or view our subscription plans.
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

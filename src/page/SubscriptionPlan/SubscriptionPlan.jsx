import React from "react";
import Pricing from "../../component/Pricing/Pricing";

const SubscriptionPlan = () => {
  return (
    <div className="bg-[#F7E8E1]">
      <p className="text-4xl font-bold text-center pt-10">Subscription Plans</p>
      <div className="container mx-auto pb-20">
        <Pricing />
      </div>
    </div>
  );
};

export default SubscriptionPlan;

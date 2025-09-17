

import Pricing from "../../component/Pricing/Pricing";
// import { useGetPodCastDetailsQuery } from "../../redux/Api/AuthApi";
import { useGetAllPlanQuery } from "../../redux/Api/SubscriptionPlan";

const SubscriptionPage = () => {
  const { data: getPodcastDetails } = useGetAllPlanQuery();

  // console.log("getPodcastDetails", getPodcastDetails);

  return (
    <div className="bg-[#F7E8E1]">
      <p className="text-2xl md:text-4xl font-bold text-center pt-10">Subscription Plans</p>
      <div className="container mx-auto pb-20">
        <Pricing subscriptions={getPodcastDetails?.data} />
      </div>
    </div>

  );
};

export default SubscriptionPage;

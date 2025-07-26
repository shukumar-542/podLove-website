
import Pricing from "../../component/Pricing/Pricing";
import { Link } from "react-router";
// import { useGetPodCastDetailsQuery } from "../../redux/Api/AuthApi";
import { useGetAllPlanQuery } from "../../redux/Api/SubscriptionPlan";

const SubscriptionPlan = () => {
  const { data: getPodcastDetails } = useGetAllPlanQuery();

  // console.log("getPodcastDetails", getPodcastDetails);

  return (
    <div className="bg-[#F7E8E1]">
      <p className="text-4xl font-bold text-center pt-10">Subscription Plans</p>
      <div className="flex justify-center mt-5">
        <Link to={"/connection-progress"}>
          <button className=" bg-[#F36E2F]  shadow-white text-white shadow-inner rounded-full px-10  py-2 max-w-xs  mb-5">
            Skip
          </button>
        </Link>
      </div>
      <div className="container mx-auto pb-20">

        <Pricing subscriptions={getPodcastDetails?.data} />
      </div>
    </div>

  );
};

export default SubscriptionPlan;

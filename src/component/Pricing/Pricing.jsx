import React from "react";
import subscription from "../../assets/subscription-bg.png";
import { IoCheckmarkOutline } from "react-icons/io5";
import { Divider } from "antd";
import { useGetAllPlanQuery } from "../../redux/Api/SubscriptionPlan";
const Pricing = () => {
  const { data: getPlan } = useGetAllPlanQuery();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10  mx-auto font-poppins mr-2 md:mr-0 ml-2 md:ml-0 ">
      {getPlan?.data?.map((plan) => {
        return (
          <div
            key={plan?._id}
            style={{
              backgroundImage: `url(${subscription})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
            }}
            className="rounded-3xl  text-white p-4 py-8 shadow-2xl shadow-black"
          >
            <p className="text-center bg-[#231A19] text-[20px] py-2  rounded-full max-w-[120px]  mx-auto">
              Listener
            </p>

            <p className=" my-2 mt-10 ">{plan?.name}</p>

            <div className="space-y-2 pb-5 mt-5 min-h-[200px]">
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
              {plan?.unitAmount == 0
                ? "Free"
                : `${plan.unitAmount} / ${plan?.interval}`}
            </h1>
            <div className="text-center">
              {plan?.unitAmount == 0 ? (
                <button className="border text-[#FFA175]  max-w-xs rounded-full w-full mt-5 py-2 border-[#FFA175] mb-5">
                  Current Plan
                </button>
              ) : (
                <div className=" text-center">
                  <button className=" bg-gradient-to-r from-[#F36E2F] to-[#FEB491]  shadow-white shadow-inner rounded-full w-full mt-5 py-2 max-w-xs  mb-5">
                    Choose this plan
                  </button>
                </div>
              )}
            </div>
            <Divider
              style={{
                borderColor: "#2D2D30",
              }}
            >
              Details
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

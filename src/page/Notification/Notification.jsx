import React from "react";
import IsPodSafe from "../../component/IsPodSafe/IsPodSafe";
import { useGetNotificationQuery } from "../../redux/Api/SubscriptionPlan";

const Notification = () => {
  const { data: getNotification } = useGetNotificationQuery();
  console.log(getNotification?.data?.notifications);
  return (
    <div className="bg-[#FAF2EF] min-h-screen">
      <div className="container mx-auto">
        <p className="text-2xl font-semibold font-poppins text-center py-10">
          Notifications
        </p>
        <p className="text-xl font-semibold">Total 0 Notifications</p>

        <div className="space-y-4 mt-10 pb-10">
          {getNotification?.data?.notifications?.map((notification) => {
            return (
              <p className="flex justify-between items-center bg-white p-3 text-[#333333]">
                <span>
                  {notification?.message}
                </span>
                <span>Just Now</span>
              </p>
            );
          })}
          {/* <p className="flex justify-between items-center bg-white p-3 text-[#333333]">
                <span>
                  A new user has completed the vetting process and registered on
                  PodLove.
                </span>
                <span>Just Now</span>
              </p> */}
         
        </div>
      </div>
      <IsPodSafe />
    </div>
  );
};

export default Notification;

import IsPodSafe from "../../component/IsPodSafe/IsPodSafe";
import { useGetNotificationQuery } from "../../redux/Api/SubscriptionPlan";

const Notification = () => {
  const { data: getNotification } = useGetNotificationQuery();

  return (
    <div className="bg-[#FAF2EF] min-h-dvh flex flex-col">
      <div className="container h-full mx-auto flex-1">
        <p className="text-2xl font-semibold font-poppins text-center py-10">
          Notifications
        </p>
        <p className="text-xl font-semibold">
          Total {getNotification?.data?.notifications?.length ?? 0}{" "}
          Notifications
        </p>

        <div className="space-y-4 mt-10 pb-10">
          {getNotification?.data?.notifications?.map((notification, i) => {
            return (
              <p
                key={i}
                className="flex justify-between items-center bg-white p-3 text-[#333333]"
              >
                <span>{notification?.message?.[0]?.description}</span>
                <span>{notification?.message?.[0]?.title}</span>
              </p>
            );
          })}
        </div>
      </div>
      <IsPodSafe />
    </div>
  );
};

export default Notification;

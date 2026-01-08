import { Empty, Spin } from "antd";
import { UserOutlined, StarFilled } from "@ant-design/icons";
import micIcon from "../../assets/mic.png";
import { useGetPodCastHistoryDetailsQuery } from "../../redux/Api/AuthApi";

const PodcastHistory = ({ userId }) => {
  const { data: historyData, isLoading } = useGetPodCastHistoryDetailsQuery();
  const history = historyData?.data?.podcast || [];

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <Spin size="large" />
      </div>
    );

  return (
    <div className="mt-16 pb-10">
      <div className="mb-8 pl-2">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
          Activity History
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Review your past spotlights and sparks.
        </p>
      </div>

      {history.length > 0 ? (
        <div className="grid gap-4">
          {history.map((hist) => {
            // Logic: Is the logged-in user the Spotlight (Primary User)?
            const isMeSpotlight = hist.primaryUser?._id === userId;
            const sessionNo = hist.scheduleStatus === "2nd" ? 2 : 1;

            return (
              <div
                key={hist._id}
                className="bg-white p-5 rounded-2xl border border-gray-50 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  {/* Avatar/Icon area */}
                  <div className="relative">
                    <div className="bg-orange-50 w-14 h-14 rounded-2xl flex items-center justify-center">
                      <img src={micIcon} className="w-7 opacity-70" alt="mic" />
                    </div>
                    {isMeSpotlight && (
                      <div className="absolute -top-1 -left-1 bg-orange-400 text-white p-1 rounded-lg shadow-sm">
                        <StarFilled className="text-[10px] block" />
                      </div>
                    )}
                  </div>

                  {/* Text Details */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 leading-tight">
                      {isMeSpotlight
                        ? `Your Spotlight Session ${sessionNo}`
                        : `Sparked with ${
                            hist.primaryUser?.name || "Spotlight"
                          }`}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <p className="text-xs text-gray-400">
                        {hist.schedule?.date} • {hist.schedule?.time}
                      </p>
                      <span className="flex items-center gap-1 text-xs text-orange-300 font-medium">
                        <UserOutlined className="text-[10px]" />
                        {hist.participants?.length || 0} Sparks
                      </span>
                    </div>
                  </div>
                </div>

                {/* Status & Recording */}
                <div className="flex items-center justify-between sm:justify-end gap-4 px-2 sm:px-0">
                  <div className="text-right">
                    <span className="bg-green-50 text-green-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {hist.finishStatus === "2ndFinish"
                        ? "Fully Completed"
                        : "Finished"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white/50 p-12 rounded-2xl border border-dashed border-gray-200 text-center">
          <Empty description="No podcast activity found." />
        </div>
      )}
    </div>
  );
};

export default PodcastHistory;

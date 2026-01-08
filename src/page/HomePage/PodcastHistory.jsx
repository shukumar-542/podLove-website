import React from "react";
import { Empty, Spin } from "antd";
import micIcon from "../../assets/mic.png";
import { useGetPodCastHistoryDetailsQuery } from "../../redux/Api/AuthApi";

const PodcastHistory = () => {
  const { data: historyData, isLoading } = useGetPodCastHistoryDetailsQuery();
  const history = historyData?.data?.podcast || [];

  if (isLoading)
    return (
      <div className="text-center mt-10">
        <Spin />
      </div>
    );

  return (
    <div className="mt-20 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-orange-400 pl-4">
        Activity History
      </h1>
      {history.length > 0 ? (
        <div className="space-y-4">
          {history.map((hist) => (
            <div
              key={hist._id}
              className="bg-white p-5 rounded-2xl flex justify-between items-center shadow-sm border border-orange-50 hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <div className="bg-orange-50 p-3 rounded-full">
                  <img src={micIcon} className="w-6 opacity-60" alt="mic" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-lg">
                    Session with {hist.primaryUser?.name || "Host"}
                  </p>
                  <p className="text-sm text-gray-500 font-medium">
                    {hist.schedule?.date || "Completed"}
                  </p>
                </div>
              </div>
              <span className="text-orange-400 font-extrabold text-xs uppercase bg-orange-50 px-4 py-1 rounded-full">
                Finished
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white/40 p-10 rounded-3xl border-2 border-dashed border-gray-300 text-center">
          <Empty description="No history found" />
        </div>
      )}
    </div>
  );
};

export default PodcastHistory;

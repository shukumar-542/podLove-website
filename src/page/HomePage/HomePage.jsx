import img1 from "../../assets/tes.png";
import video from "../../assets/schedule.mp4";
import mic from "../../assets/mic.png";
import { Link, useNavigate } from "react-router";
import Pricing from "../../component/Pricing/Pricing";
import {
  useGetPodCastDetailsQuery,
  usePodcastCreateMutation,
} from "../../redux/Api/AuthApi";
import { toast } from "sonner";
import { useGetAllPlanQuery } from "../../redux/Api/SubscriptionPlan";
import { useSendPodcastRequestMutation } from "../../redux/Api/PodcastApi";
import { Spin } from "antd";

const HomePage = () => {
  const navigate = useNavigate();
  const [createPodCast] = usePodcastCreateMutation();
  const [sendPodcastRequest, { isLoading: requestPodcastLoading }] = useSendPodcastRequestMutation();
  const { data: getPodcastDetails, isLoading } = useGetPodCastDetailsQuery();
  console.log('home page', getPodcastDetails);
  const { data: getAllPlans } = useGetAllPlanQuery();

  const podcast = getPodcastDetails?.data?.podcast;
  const status = podcast?.status;

  const handleVideoCall = () => {
    if (!podcast?._id) {
      toast.error("Podcast not available!");
      return;
    }
    navigate(`/room/${podcast._id}`);
  };

  const handleCreatePodcast = () => {
    createPodCast()
      .unwrap()
      .then((payload) => toast.success(payload?.message))
      .catch((error) => toast.error(error?.data?.message));
  };

  const handleRequestPodcast = () => {
    const data = {
      status: "ReqScheduled",
    }
    sendPodcastRequest(data)
      .unwrap()
      .then((payload) => {
        console.log('payload', payload)
        // toast.success(payload?.message))
        window.location.reload();
      })
      .catch((error) =>
        toast.error(error?.data?.message || "Failed to request podcast.")
      );
  };

  const getButtonLabel = () => {
    switch (status) {
      case "Scheduled": // only show date and time
        return "Scheduled";
      case "Playing": // when playing when show button to (Join Now)
        return "Join Now";
      case "Done":
      case "Finished":
        return "Session Completed";
      case "NotScheduled":
        return "Request a Podcast";
      case "ReqScheduled":
        return "Requested For Podcast";
      default:
        return "Not Available";
    }
  };

  const isJoinEnabled = status === "Playing";

  return (
    <div className="bg-[#F7E8E1]">
      <div className="container mx-auto py-14">
        {/* Create New Match */}
        <div className="flex justify-center">
          {podcast?.participants?.length === 0 && (
            <button
              onClick={handleCreatePodcast}
              className="bg-[#F68064] w-full max-w-[200px] mt-2 py-2 mb-8 rounded-md text-white text-xl"
            >
              Create New Match
            </button>
          )}
        </div>

        {/* Matches Section */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
            {[...Array(4)].map((_, i) => (
              <div className="animate-pulse" key={`skeleton-${i}`}>
                <div className="w-full h-[390px] bg-[#fcf7f5] rounded-tl-3xl rounded-br-3xl"></div>
                <div className="mt-5 w-full h-10 bg-[#fcf7f5] rounded-tl-lg rounded-br-lg"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
            {podcast?.participants?.map((participant, i) => (
              <div key={participant?._id}>
                <Link to={`/podcast-details/${participant?._id}`}>
                  <div className="cursor-pointer hover:shadow-2xl rounded-br-3xl relative">
                    <img src={img1} className="w-full" alt="" />
                    <p className="absolute bottom-10 right-[45%] text-xl font-semibold">
                      Match-{i + 1}
                    </p>
                  </div>
                </Link>
                {podcast?.selectedUser && (
                  <Link to={`/chat/${participant?._id}`}>
                    <button
                      disabled={
                        !podcast?.selectedUser.some(
                          (sel) => sel?.user === participant?._id
                        )
                      }
                      className={`mt-5 w-full text-white rounded-tl-lg rounded-br-lg py-2 text-xl 
                      ${podcast?.selectedUser.some((sel) => sel?.user === participant?._id)
                          ? "bg-[#FFA175]"
                          : "bg-gray-400"
                        }`}
                    >
                      Chat
                    </button>
                  </Link>
                )}

              </div>
            ))}
          </div>
        )}
        <h1 className="text-center font-bold text-2xl md:text-4xl my-14">
          Podcast Schedule
        </h1>
        {/* Video + Join / Request Button Section */}
        <section className="mb-20 relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-[500px] mx-auto rounded-md"
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img src={mic} alt="Microphone" className="w-24 h-24 mx-auto" />
            <h1 className="text-4xl font-poppins text-white">Date & Time:</h1>

            {/* Conditional Button */}
            {status === "NotScheduled" ? (
              <button
                onClick={handleRequestPodcast}
                disabled={requestPodcastLoading}
                className="w-full mt-2 py-2 rounded-md bg-[#FFA175] text-white hover:bg-[#e68b5a] transition duration-300"
              >
                {getButtonLabel()} {requestPodcastLoading && <Spin></Spin>}
              </button>
            ) : (
              <div>
                <h2 className=" text-white">{getPodcastDetails?.data?.podcast?.schedule?.date} {getPodcastDetails?.data?.podcast?.schedule?.day} {getPodcastDetails?.data?.podcast?.schedule?.time}</h2>
                <button
                  disabled={!isJoinEnabled}
                  onClick={isJoinEnabled ? handleVideoCall : undefined}
                  className={`w-full mt-2 py-2 rounded-md transition duration-300 
                  ${isJoinEnabled
                      ? "bg-[#F68064] text-white hover:bg-[#e76a4f]"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                >
                  {getButtonLabel()}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Subscription Plans */}
        <h1 className="text-center font-bold text-2xl md:text-4xl">
          Subscription Plan
        </h1>
        <Pricing subscriptions={getAllPlans?.data} />
      </div>
    </div>
  );
};

export default HomePage;
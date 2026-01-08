import { Spin, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { toast } from "sonner";
import mic from "../../assets/mic.png";
import videoSrc from "../../assets/schedule.mp4";
import {
  useCreatePodcastMutation,
  useSendPodcastRequestMutation,
} from "../../redux/Api/PodcastApi";

const PodcastAction = ({
  podcast,
  isPrimaryUser,
  myParticipant,
  isTwoRoundsComplete,
  isLoading,
}) => {
  const [createPodcast, { isLoading: isCreating }] = useCreatePodcastMutation();
  const [sendPodcastRequest, { isLoading: isRequesting }] =
    useSendPodcastRequestMutation();

  const isLive =
    podcast?.status === "StreamStart" || podcast?.status === "Playing";
  const hasRequested = isPrimaryUser
    ? podcast?.isRequest
    : myParticipant?.isRequest;

  const handleJoinLogic = () => {
    if (!podcast?._id || !podcast?.roomCodes) return;

    const waitingCode = podcast.roomCodes.find(
      (c) => c.role === "waiting-room"
    )?.code;

    if (waitingCode) {
      window.open(`/ms/?roomCode=${waitingCode}`, "_blank");
    } else {
      message.error("Waiting room link is not available yet!");
    }
  };

  const handleAction = async () => {
    try {
      if (isLive) {
        if (isPrimaryUser && podcast?.status === "StreamStart") {
          await createPodcast(podcast._id).unwrap();
        }
        handleJoinLogic();
      } else {
        if (!hasRequested) {
          await sendPodcastRequest({
            podcastId: podcast._id,
            status: "ReqScheduled",
          }).unwrap();
          toast.success("Request Sent Successfully!");
        }
      }
    } catch (err) {
      message.error(err?.data?.message || "Something went wrong");
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto h-[500px] flex items-center justify-center bg-black/10 rounded-2xl border-2 border-dashed border-gray-400">
        <div className="text-center">
          <Spin
            indicator={
              <LoadingOutlined
                style={{ fontSize: 48, color: "#F68064" }}
                spin
              />
            }
          />
          <p className="mt-4 text-gray-500 font-bold animate-pulse">
            Loading Podcast Details...
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative rounded-2xl overflow-hidden max-w-5xl mx-auto shadow-2xl bg-black h-[500px]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-8 bg-gradient-to-b from-transparent to-black/60">
        <div className="flex flex-col items-center max-w-lg w-full">
          <img
            src={mic}
            alt="mic"
            className={`w-24 mb-6 ${isLive ? "animate-bounce" : "opacity-50"}`}
          />

          <div className="text-center mb-10">
            {isLive ? (
              <div className="space-y-2">
                <h2 className="text-4xl font-black text-[#F68064] tracking-tighter uppercase italic">
                  LIVE NOW
                </h2>
                {isTwoRoundsComplete && (
                  <p className="text-green-400 font-bold bg-green-400/10 py-1 px-4 rounded-full inline-block border border-green-400/20">
                    Two Rounds Completed!
                  </p>
                )}
                <p className="text-gray-400 font-medium tracking-widest block pt-2">
                  Click below to enter podcast
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <h2 className="text-2xl font-bold uppercase tracking-[0.3em] text-gray-400">
                  Upcoming Podcast
                </h2>
                <p className="text-[#F68064] font-mono text-xl">
                  {podcast?.schedule?.date || "To Be Announced"}
                </p>
              </div>
            )}
          </div>

          <button
            disabled={isCreating || isRequesting || (!isLive && hasRequested)}
            onClick={handleAction}
            className={`w-full py-5 rounded-2xl font-black text-xl transition-all transform active:scale-95 shadow-xl
              ${
                isLive
                  ? "bg-[#F68064] hover:bg-[#f36b4b] hover:shadow-[#F68064]/40"
                  : hasRequested
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed border border-white/10"
                  : "bg-[#F68064] hover:bg-[#e07258]"
              }`}
          >
            {isCreating || isRequesting ? (
              <Spin
                indicator={
                  <LoadingOutlined
                    style={{ fontSize: 24, color: "#fff" }}
                    spin
                  />
                }
              />
            ) : isLive ? (
              "JOIN PODCAST"
            ) : hasRequested ? (
              "REQUESTED FOR PODCAST"
            ) : (
              "REQUEST FOR PODCAST"
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PodcastAction;

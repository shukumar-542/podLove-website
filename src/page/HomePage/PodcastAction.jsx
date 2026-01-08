import { Spin, message } from "antd";
import {
  LoadingOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
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

  const sessionNo = podcast?.scheduleStatus === "2nd" ? 2 : 1;

  const isScheduled = podcast?.schedule?.date && !isLive;

  const handleJoinLogic = () => {
    if (!podcast?._id || !podcast?.roomCodes) return;
    const waitingCode = podcast.roomCodes.find(
      (c) => c.role === "waiting-room"
    )?.code;
    if (waitingCode) {
      window.open(`/ms/?roomCode=${waitingCode}`, "_blank");
    } else {
      message.error("The session hasn't started yet. Please try again soon.");
    }
  };

  const handleAction = async () => {
    try {
      if (isLive) {
        if (isPrimaryUser && podcast?.status === "StreamStart") {
          await createPodcast(podcast._id).unwrap();
        }
        handleJoinLogic();
      } else if (!hasRequested) {
        await sendPodcastRequest({
          podcastId: podcast._id,
          status: "ReqScheduled",
        }).unwrap();
        toast.success("Request sent successfully!");
      }
    } catch (err) {
      message.error(err?.data?.message || "Something went wrong.");
    }
  };

  if (isLoading) {
    return (
      <div className="h-[700px] flex items-center justify-center bg-black/10 rounded-2xl">
        <div className="text-center">
          <Spin
            indicator={
              <LoadingOutlined
                style={{ fontSize: 48, color: "#F68064" }}
                spin
              />
            }
          />
          <p className="mt-4 text-gray-500 font-bold animate-pulse uppercase tracking-widest">
            Syncing Podcast...
          </p>
        </div>
      </div>
    );
  }

  if (!podcast?._id && !isLoading) {
    return (
      <section className="relative rounded-2xl overflow-hidden bg-black h-[700px] flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="relative z-10 text-center px-10">
          <img src={mic} className="w-20 mx-auto mb-6 opacity-40" alt="mic" />
          <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-widest">
            Finding Your Perfect Match
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            We&apos;re curating your next real connection with care. Every match
            is chosen intentionally to feel meaningful. It takes a little time
            to do this right.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative rounded-2xl overflow-hidden shadow-2xl bg-black h-[700px]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-8 text-center">
        <div className="flex flex-col items-center max-w-lg w-full">
          <img
            src={mic}
            alt="mic"
            className={`w-24 mb-6 ${isLive ? "animate-bounce" : "opacity-50"}`}
          />

          {isTwoRoundsComplete ? (
            <div className="space-y-6 animate-in fade-in zoom-in duration-500">
              <h2 className="text-4xl font-black text-[#F68064] tracking-tighter uppercase italic">
                JOURNEY COMPLETED!
              </h2>
              <p className="text-gray-300 text-lg">
                You&apos;ve finished 2 podcast sessions. Would you like to
                continue with this person?
              </p>
              <div className="flex flex-col sm:flex-row-reverse gap-4 w-full">
                <button
                  onClick={() => message.success("Continuing journey...")}
                  className="flex-1 py-5 bg-white text-black rounded-2xl border-2 border-white font-black text-xl hover:border-green-400 hover:bg-green-600 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircleOutlined /> CONTINUE
                </button>
                <button
                  onClick={() => message.info("Journey ended.")}
                  className="flex-1 py-5 bg-transparent border-2 border-white/20 hover:border-red-400 text-white rounded-2xl font-black text-xl hover:bg-red-600 transition-all flex items-center justify-center gap-2"
                >
                  <CloseCircleOutlined /> END
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                {isLive ? (
                  <div className="space-y-2">
                    <h2 className="text-4xl font-black text-[#F68064] tracking-tighter uppercase italic">
                      SESSION {sessionNo} IS LIVE
                    </h2>
                    <p className="text-gray-300 font-medium tracking-wide block pt-2">
                      {isPrimaryUser
                        ? "Welcome back, Spotlight! Your audience is waiting."
                        : "The Spotlight is on! Join the room as a Spark."}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <h2 className="text-4xl font-black  tracking-tighter uppercase italic text-gray-400">
                      {hasRequested
                        ? `Waiting for Session ${sessionNo}`
                        : "Match Found!"}
                    </h2>
                    <p className="text-[#F68064] font-mono text-xl font-bold">
                      {hasRequested
                        ? podcast?.schedule?.date || "Date to be announced"
                        : "Ready to start your first podcast session?"}
                    </p>
                    {hasRequested && isScheduled && (
                      <p className="text-sm text-gray-400 uppercase tracking-widest mt-2">
                        Time: {podcast?.schedule?.time}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <button
                disabled={
                  isCreating || isRequesting || (!isLive && hasRequested)
                }
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
                  isPrimaryUser ? (
                    "JOIN AS SPOTLIGHT"
                  ) : (
                    "JOIN AS SPARK"
                  )
                ) : hasRequested ? (
                  "REQUESTED FOR PODCAST"
                ) : (
                  "REQUEST FOR PODCAST"
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default PodcastAction;

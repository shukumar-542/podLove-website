import { Spin, message } from "antd";
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
}) => {
  const [createPodcast, { isLoading: isCreating }] = useCreatePodcastMutation();
  const [sendPodcastRequest, { isLoading: isRequesting }] =
    useSendPodcastRequestMutation();

  const status = podcast?.status;

  // ১. পডকাস্ট কি লাইভ? (Playing অথবা StreamStart হলে লাইভ)
  const isLive = status === "StreamStart" || status === "Playing";

  // ২. ইনডিভিজুয়াল রিকোয়েস্ট চেক (প্রাইমারি ইউজারের জন্য podcast.isRequest আর পার্টিসিপেন্টের জন্য myParticipant.isRequest)
  const hasRequested = isPrimaryUser
    ? podcast?.isRequest === true
    : myParticipant?.isRequest === true;

  const handleAction = async () => {
    if (!podcast?._id) return;
    try {
      if (isLive) {
        // যদি হোস্ট হয় এবং এখনো স্ট্রিম শুরু না করে থাকে
        if (isPrimaryUser && status === "StreamStart") {
          await createPodcast(podcast._id).unwrap();
          toast.success("Podcast Started!");
        }

        // ৩. জয়েনিং লজিক ফিক্স (JSON অনুযায়ী রোল ম্যাপিং)
        // Primary User এর জন্য 'waiting-room' এবং অন্যদের জন্য 'guest-on-stage'
        const role = isPrimaryUser ? "waiting-room" : "guest-on-stage";
        const roomCode = podcast?.roomCodes?.find(
          (code) => code?.role === role
        );

        if (roomCode?.code) {
          window.open(`/ms/?roomCode=${roomCode.code}`, "_blank");
        } else {
          message.error("Room code not found!");
        }
      } else {
        // ৪. রিকোয়েস্ট লজিক (যদি লাইভ না থাকে এবং রিকোয়েস্ট না করা থাকে)
        if (!hasRequested) {
          await sendPodcastRequest({
            podcastId: podcast._id,
            status: "ReqScheduled",
          }).unwrap();
          toast.success("Podcast Requested!");
        }
      }
    } catch (err) {
      message.error(err?.data?.message || "Action failed");
    }
  };

  return (
    <section className="relative rounded-2xl overflow-hidden max-w-5xl mx-auto shadow-2xl bg-black h-[500px]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-60"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
        {isTwoRoundsComplete ? (
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20">
            <h2 className="text-3xl font-bold mb-6">Match Decision</h2>
            <div className="flex gap-4">
              <button className="bg-green-500 px-8 py-3 rounded-xl font-bold transition hover:scale-105">
                Continue
              </button>
              <button className="bg-red-500 px-8 py-3 rounded-xl font-bold transition hover:scale-105">
                Not to Continue
              </button>
            </div>
          </div>
        ) : (
          <>
            <img
              src={mic}
              alt="mic"
              className={`w-20 mb-4 ${isLive ? "animate-bounce" : ""}`}
            />
            <h2 className="text-2xl font-bold mb-6 uppercase tracking-widest">
              {podcast?.schedule?.date
                ? `${podcast.schedule.date} | ${podcast.schedule.time}`
                : hasRequested
                ? "Request Pending"
                : "Awaiting Schedule"}
            </h2>
            <div className="w-full max-w-xs">
              {isPrimaryUser ? (
                /* Primary User Button */
                <button
                  onClick={handleAction}
                  disabled={
                    isCreating || isRequesting || (hasRequested && !isLive)
                  }
                  className={`w-full py-3 rounded-xl font-bold transition ${
                    hasRequested && !isLive ? "bg-gray-500" : "bg-[#F68064]"
                  }`}
                >
                  {isCreating || isRequesting ? (
                    <Spin size="small" />
                  ) : isLive ? (
                    "Start / Join Podcast"
                  ) : hasRequested ? (
                    "Request Pending"
                  ) : (
                    "Request Podcast"
                  )}
                </button>
              ) : (
                /* Participant Button */
                <button
                  disabled={
                    isRequesting ||
                    (!hasRequested && !isLive) ||
                    (isLive && !myParticipant?.isAllow)
                  }
                  onClick={handleAction}
                  className={`w-full py-3 rounded-xl font-bold transition ${
                    (isLive && myParticipant?.isAllow) ||
                    (!hasRequested && !isLive)
                      ? "bg-[#F68064]"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  {isRequesting ? (
                    <Spin size="small" />
                  ) : isLive ? (
                    myParticipant?.isAllow ? (
                      "Join Discussion"
                    ) : (
                      "Waiting for Access"
                    )
                  ) : hasRequested ? (
                    "Request Pending"
                  ) : (
                    "Request Podcast"
                  )}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default PodcastAction;

import img1 from "../../assets/tes.png";
import video from "../../assets/schedule.mp4";
import mic from "../../assets/mic.png";
import { Link } from "react-router";
import Pricing from "../../component/Pricing/Pricing";
import {
  useGetPodCastDetailsQuery,
  useGetUserQuery,
} from "../../redux/Api/AuthApi";
import { toast } from "sonner";
import { useGetAllPlanQuery } from "../../redux/Api/SubscriptionPlan";
import {
  useCreatePodcastMutation,
  useSendPodcastRequestMutation,
} from "../../redux/Api/PodcastApi";
import { message, Spin } from "antd";
import { Carousel } from "antd";
import { useEffect, useState } from "react";
import FirstSurvey from "../../component/Modals/FirstSurvey";
import SecondSurvey from "../../component/Modals/SecondSurvey";
import After7DaysSurveyModal from "../../component/Modals/After7DaysSurvey";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: getUser } = useGetUserQuery();
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [is7DaysModalOpen, setIs7DaysModalOpen] = useState(false);

  const handle7DaysOk = () => {
    setIs7DaysModalOpen(false);
  };
  const handle7DaysCancel = () => {
    setIs7DaysModalOpen(false);
  };

  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const handleSecondOk = () => {
    setIsSecondModalOpen(false);
  };
  const handleSecondCancel = () => {
    setIsSecondModalOpen(false);
  };

  const [sendPodcastRequest, { isLoading: requestPodcastLoading }] =
    useSendPodcastRequestMutation();
  const { data: getPodcastDetails, isLoading } = useGetPodCastDetailsQuery();
  const { data: getAllPlans } = useGetAllPlanQuery();
  const [createPodcast] = useCreatePodcastMutation();

  const podcast = getPodcastDetails?.data?.podcast;

  useEffect(() => {
    if (
      podcast?.finishStatus === "1stFinish" &&
      podcast?.questionsStatus === null
    ) {
      setIsModalOpen(true);
    }

    if (
      podcast?.finishStatus === "2ndFinish" &&
      podcast?.questionsStatus === "1stDone"
    ) {
      setIsSecondModalOpen(true);
    }

    if (getPodcastDetails?.data?.user?.auth?.shareFeedback === "7days") {
      setIs7DaysModalOpen(true);
    }
  }, [getPodcastDetails]);

  const status = podcast?.status;

  const roomCodeHost = podcast?.roomCodes?.find(
    (code) => code?.role === "waiting-room"
  );

  const handleVideoCall = () => {
    if (!podcast?._id) {
      toast.error("Podcast not available!");
      return;
    }
    if (status === "StreamStart") {
      createPodcast(podcast?._id)
        .unwrap()
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          message.error(error?.data?.message);
        });
    }
    if (status === "Playing" || status === "Done") {
      window.open(
        `/ms/?roomCode=${roomCodeHost?.code}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  // ================================================================
  // Handle video call for matched user
  // ================================================================
  const handleVideoCallForUser = (roomCodes) => {
    const code = roomCodes?.find((code) => code?.role === "waiting-room");
    if (code) {
      window.open(
        `/ms/?roomCode=${code?.code}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  //  ========================================================================================
  // Handle request podcast function
  //  ========================================================================================
  const handleRequestPodcast = () => {
    const data = {
      status: "ReqScheduled",
    };
    sendPodcastRequest(data)
      .unwrap()
      .then(() => {
        // toast.success(payload?.message))
        window.location.reload();
      })
      .catch(() =>
        toast.error("Podcast request failed", {
          description: "Something went wrong. Please try again in a moment.",
        })
      );
  };

  const getButtonLabel = () => {
    if (
      podcast?.finishStatus === "1stFinish" &&
      podcast?.questionsStatus === "1stDone" &&
      status === "Finished"
    ) {
      return "Request a Podcast";
    }
    switch (status) {
      case "Scheduled":
        return "Scheduled";
      case "Playing":
        return "Join Now";
      case "StreamStart":
        return "Join Now";
      case "Done":
        return "Join Now";
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

  // const isJoinEnabled = status === "Playing";
  const isJoinEnabled =
    (podcast?.questionsStatus === "1stDone" && status === "Finished") ||
    status === "Playing" ||
    status === "Done";

  const isChatAvailable =
    getPodcastDetails?.data?.user?.chatingtime &&
    new Date() >= new Date(getPodcastDetails.data.user.chatingtime);

  const userId = getUser?.data?._id;

  const isRequested = podcast?.participants?.some(
    (participant) => participant?.isRequest && participant?._id === userId
  );

  return (
    <div className="bg-[#F7E8E1]">
      <div className="container mx-auto py-14">
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
          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-10 px-4 md:px-0">
            {podcast?.participants
              ?.filter((participant) => participant?._id !== userId) // <-- exclude current user
              .map((participant, i) => (
                <div key={participant?._id}>
                  {getPodcastDetails?.data?.user?.subscription?.fee ===
                  "Free" ? (
                    <div className="cursor-pointer hover:shadow-2xl rounded-br-3xl relative">
                      <img src={img1} className="w-full" alt="" />
                      <p className="absolute bottom-6 md:bottom-10 right-[32%] md:right-[45%] text-xl font-semibold">
                        Match-{i + 1}
                      </p>
                    </div>
                  ) : (
                    <Link to={`/podcast-details/${participant?._id}`}>
                      <div className="cursor-pointer hover:shadow-2xl rounded-br-3xl relative">
                        <img src={img1} className="w-full" alt="" />
                        <p className="absolute bottom-6 md:bottom-10 right-[32%] md:right-[45%] text-xl font-semibold">
                          Match-{i + 1}
                        </p>
                      </div>
                    </Link>
                  )}

                  {isChatAvailable ? (
                    <button
                      disabled={true}
                      className="mt-5 w-full text-white rounded-tl-lg rounded-br-lg py-2 text-xl bg-gray-400"
                    >
                      Chat
                    </button>
                  ) : (
                    <div>
                      {podcast?.selectedUser && (
                        <Link to={`/chat/${participant?._id}`}>
                          <button
                            disabled={
                              !podcast?.selectedUser.some(
                                (sel) => sel?.user === participant?._id
                              )
                            }
                            className={`mt-5 w-full text-white rounded-tl-lg rounded-br-lg py-2 text-xl ${
                              podcast?.selectedUser.some(
                                (sel) => sel?.user === participant?._id
                              )
                                ? "bg-[#FFA175]"
                                : "bg-gray-400"
                            }`}
                          >
                            Chat
                          </button>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}

        {podcast?.primaryUser?._id && (
          <>
            <h1 className="text-center font-bold text-2xl md:text-4xl my-14">
              My Podcast Schedule
            </h1>
            {/* Video + Join / Request Button Section */}
            <section className="md:mb-20 relative ">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="md:h-[500px] mx-auto rounded-md"
              >
                <source src={video} type="video/mp4" />
              </video>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <img
                  src={mic}
                  alt="Microphone"
                  className=" w-10 md:w-24 h-10 md:h-24 mx-auto"
                />
                <h1 className="md:text-4xl font-poppins text-white">
                  Date & Time:
                </h1>

                {status === "NotScheduled" ||
                (podcast?.questionsStatus === "1stDone" &&
                  status === "Finished") ? (
                  <button
                    onClick={handleRequestPodcast}
                    disabled={requestPodcastLoading}
                    className="w-full mt-2 py-2 rounded-md bg-[#FFA175] text-white hover:bg-[#e68b5a] transition duration-300"
                  >
                    {getButtonLabel()} {requestPodcastLoading && <Spin></Spin>}
                  </button>
                ) : status === "ReqScheduled" && isRequested !== true ? (
                  <button
                    disabled={isRequested === true}
                    onClick={handleRequestPodcast}
                    className={`w-full mt-2 py-2 rounded-md transition duration-300 
                  ${
                    !isRequested
                      ? "bg-[#F68064] text-white hover:bg-[#e76a4f]"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                  >
                    Request a Podcast
                  </button>
                ) : (
                  <div>
                    <h2 className=" text-white">
                      {getPodcastDetails?.data?.podcast?.schedule?.date}{" "}
                      {getPodcastDetails?.data?.podcast?.schedule?.day}{" "}
                      {getPodcastDetails?.data?.podcast?.schedule?.time}
                    </h2>
                    <button
                      disabled={!isJoinEnabled}
                      onClick={isJoinEnabled ? handleVideoCall : undefined}
                      className={`w-full mt-2 py-2 rounded-md transition duration-300 ${
                        isJoinEnabled
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
          </>
        )}

        {!podcast?.primaryUser?._id &&
          !getPodcastDetails?.data?.podcast?.participants?.length && (
            <section className="relative md:mb-20 flex items-center justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover rounded-md"
              >
                <source src={video} type="video/mp4" />
              </video>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 z-10">
                <img
                  src={mic}
                  alt="Microphone"
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 mb-4"
                />

                <div className="space-y-3 sm:space-y-4 max-w-2xl">
                  <h2 className="text-white text-base sm:text-lg md:text-2xl font-semibold">
                    {getPodcastDetails?.data?.podcast?.schedule?.date}{" "}
                    {getPodcastDetails?.data?.podcast?.schedule?.day}{" "}
                    {getPodcastDetails?.data?.podcast?.schedule?.time}
                  </h2>

                  <h6 className="text-gray-100 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-center mx-auto rounded-xl bg-white/10 backdrop-blur-md shadow-xl px-4 sm:px-6 py-3 sm:py-4 border border-white/20">
                    We’re curating your next{" "}
                    <span className="font-semibold text-white">
                      real connection
                    </span>{" "}
                    with care. Every match is chosen intentionally to feel
                    meaningful, not random. It takes a little time to do this
                    right. Thank you for your patience.
                  </h6>
                </div>
              </div>
            </section>
          )}
        <>
          {getPodcastDetails?.data?.podcast?.participants?.length > 0 &&
            !podcast?.primaryUser?._id && (
              <h1 className="text-center font-bold text-2xl md:text-4xl my-14">
                You&apos;re Matched With Someone
              </h1>
            )}
          {getPodcastDetails?.data?.podcast?.participants?.length > 0 &&
            !podcast?.primaryUser?._id && (
              <Carousel arrows infinite={false}>
                {getPodcastDetails?.data?.podcast?.participants
                  ?.filter((participant) => participant?._id === userId)
                  .map((match) => (
                    <section key={match?._id} className="relative">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="md:h-[500px] mx-auto rounded-md"
                      >
                        <source src={video} type="video/mp4" />
                      </video>

                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <img
                          src={mic}
                          alt="Microphone"
                          className="w-10 md:w-24 h-10 md:h-24 mx-auto"
                        />
                        <h1 className="md:text-4xl font-poppins text-white">
                          Date & Time:
                        </h1>

                        {podcast?.status === "Playing" ||
                        podcast?.status === "Done" ? (
                          <div>
                            <h2 className="text-white text-center">
                              {podcast?.schedule?.date} {podcast?.schedule?.day}{" "}
                              {podcast?.schedule?.time}
                            </h2>
                            <button
                              onClick={() =>
                                podcast?.status === "Playing" ||
                                podcast?.status === "Done"
                                  ? handleVideoCallForUser(podcast?.roomCodes)
                                  : undefined
                              }
                              className={`w-full mt-2 py-2 rounded-md transition duration-300 ${
                                podcast?.status === "Playing" ||
                                podcast?.status === "Done"
                                  ? "bg-[#F68064] text-white hover:bg-[#e76a4f]"
                                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
                              }`}
                            >
                              {podcast?.status === "Playing" ||
                              podcast?.status === "Done"
                                ? "Join Now"
                                : "Not Available"}
                            </button>
                          </div>
                        ) : podcast?.status === "NotScheduled" ||
                          podcast?.status === "ReqScheduled" ? (
                          <button
                            onClick={handleRequestPodcast}
                            disabled={match?.isRequest}
                            className="w-full mt-2 py-2 rounded-md bg-[#FFA175] text-white hover:bg-[#e68b5a] transition duration-300"
                          >
                            {match?.isRequest ? (
                              "Please Waiting for Schedule"
                            ) : (
                              <>
                                {getButtonLabel()}{" "}
                                {requestPodcastLoading && <Spin />}
                              </>
                            )}
                          </button>
                        ) : (
                          <div>
                            <h2 className="text-white text-center"></h2>
                            <button className="w-full mt-2 py-2 rounded-md transition duration-300 bg-gray-200 text-gray-500 cursor-not-allowed">
                              Not Available
                            </button>
                          </div>
                        )}
                      </div>
                    </section>
                  ))}
              </Carousel>
            )}
        </>

        {/* Subscription Plans */}
        <h1 className="text-center font-bold text-2xl md:text-4xl mt-16">
          Subscription Plan
        </h1>
        <Pricing
          subscriptions={getAllPlans?.data}
          buttonDisabled={getPodcastDetails?.data?.podcast}
          activePlan={getUser?.data?.subscription}
        />
      </div>
      <FirstSurvey
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        podcastId={getPodcastDetails?.data?.podcast?._id}
      ></FirstSurvey>
      <SecondSurvey
        isSecondModalOpen={isSecondModalOpen}
        handleSecondOk={handleSecondOk}
        handleSecondCancel={handleSecondCancel}
        podcastId={getPodcastDetails?.data?.podcast?._id}
      ></SecondSurvey>
      <After7DaysSurveyModal
        is7DaysModalOpen={is7DaysModalOpen}
        handle7DaysOk={handle7DaysOk}
        handle7DaysCancel={handle7DaysCancel}
        podcastId={getPodcastDetails?.data?.podcast?._id}
      ></After7DaysSurveyModal>
    </div>
  );
};

export default HomePage;

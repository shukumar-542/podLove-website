import img1 from "../../assets/tes.png";
import video from "../../assets/schedule.mp4";
import mic from "../../assets/mic.png";
import { Link, useNavigate } from "react-router";
import Pricing from "../../component/Pricing/Pricing";
import {
  useGetPodCastDetailsQuery,
  // usePodcastCreateMutation,
} from "../../redux/Api/AuthApi";
import { toast } from "sonner";
import { useGetAllPlanQuery } from "../../redux/Api/SubscriptionPlan";
import { useCreatePodcastMutation, useSendPodcastRequestMutation } from "../../redux/Api/PodcastApi";
import { message, Spin } from "antd";
import { Carousel } from 'antd';
import { useEffect, useState } from "react";
import FirstSurvey from "../../component/Modals/FirstSurvey";
import SecondSurvey from "../../component/Modals/SecondSurvey";
import After7DaysSurveyModal from "../../component/Modals/After7DaysSurvey";
// import { useState } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // const [userSelectedRoomCode, setUserSelectedRoomCode] = useState();
  // const [createPodCast] = usePodcastCreateMutation();
  const [sendPodcastRequest, { isLoading: requestPodcastLoading }] = useSendPodcastRequestMutation();
  const { data: getPodcastDetails, isLoading } = useGetPodCastDetailsQuery();
  console.log('home page', getPodcastDetails);
  const { data: getAllPlans } = useGetAllPlanQuery();
  const [createPodcast] = useCreatePodcastMutation();

  const podcast = getPodcastDetails?.data?.podcast;
  console.log('home my app test dur', getPodcastDetails?.data?.user?.subscription?.fee);

  useEffect(() => {
    if (podcast?.finishStatus === "1stFinish" && podcast?.questionsStatus === null) {
      setIsModalOpen(true);
    }

    if (podcast?.finishStatus === "2ndFinish" && podcast?.questionsStatus === "1stDone") {
      setIsSecondModalOpen(true);
    }

    if (getPodcastDetails?.data?.user?.auth?.shareFeedback === "7days") {
      setIs7DaysModalOpen(true);
    }

  }, [getPodcastDetails]);

  const status = podcast?.status;

  // const roomCodeHost = podcast?.roomCodes?.find(code => code?.role === "broadcaster");
  const roomCodeHost = podcast?.roomCodes?.find(code => code?.role === "viewer-realtime");

  const handleVideoCall = () => {
    if (!podcast?._id) {
      toast.error("Podcast not available!");
      return;
    }
    if (status === "StreamStart") {
      console.log('clicked');
      createPodcast(podcast?._id).unwrap()
        .then((data) => {
          console.log(data?.data?.data);
          window.location.reload();
        }).catch((error) => {
          console.log(error);
          message.error(error?.data?.message)
        })
    }
    if (status === "Playing" || status === "Done") {
      // navigate(`/room/podcast?roomId=${podcast._id}&hostId=${getPodcastDetails?.data?.podcast?.primaryUser?._id}`);
      navigate(`/ms/?roomCode=${roomCodeHost?.code}`);
    }
  };


  const handleVideoCallForUser = (roomCodes) => {
    console.log(roomCodes);
    const code = roomCodes?.find(code => code?.role === "viewer-realtime");
    console.log(code);
    if (code) {
      navigate(`/ms/?roomCode=${code?.code}`);
    }
  };

  // const handleCreatePodcast = () => {
  //   createPodCast()
  //     .unwrap()
  //     .then((payload) => toast.success(payload?.message))
  //     .catch((error) => toast.error(error?.data?.message));
  // };

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
    if (podcast?.finishStatus === "1stFinish" && podcast?.questionsStatus === "1stDone" && status === "Finished") {
      return "Request a Podcast";
    }
    switch (status) {
      case "Scheduled": // only show date and time
        return "Scheduled";
      case "Playing": // when playing when show button to (Join Now)
        return "Join Now";
      case "StreamStart": // when playing when show button to (Join Now)
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
  const isJoinEnabled = (podcast?.questionsStatus === "1stDone" && status === "Finished") || status === "Playing" || status === "Done";

  const isChatAvailable =
    getPodcastDetails?.data?.user?.chatingtime &&
    new Date() >= new Date(getPodcastDetails.data.user.chatingtime);

  return (
    <div className="bg-[#F7E8E1]">
      <div className="container mx-auto py-14">
        {/* Create New Match */}
        {/* <div className="flex justify-center">
          {podcast?.participants?.length === 0 && (
            <button
              onClick={handleCreatePodcast}
              className="bg-[#F68064] w-full max-w-[200px] mt-2 py-2 mb-8 rounded-md text-white text-xl"
            >
              Create New Match
            </button>
          )}
        </div> */}

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
          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-10 px-4 md:px-0">
            {podcast?.participants?.map((participant, i) => (
              <div key={participant?._id}>

                {
                  getPodcastDetails?.data?.user?.subscription?.fee === 'Free' ?

                    <div className="cursor-pointer hover:shadow-2xl rounded-br-3xl relative">
                      <img src={img1} className="w-full" alt="" />
                      <p className="absolute bottom-6 md:bottom-10 right-[32%] md:right-[45%] text-xl font-semibold">
                        Match-{i + 1}
                      </p>
                    </div>
                    :
                    <Link to={`/podcast-details/${participant?._id}`}>
                      <div className="cursor-pointer hover:shadow-2xl rounded-br-3xl relative">
                        <img src={img1} className="w-full" alt="" />
                        <p className="absolute bottom-6 md:bottom-10 right-[32%] md:right-[45%] text-xl font-semibold">
                          Match-{i + 1}
                        </p>
                      </div>
                    </Link>
                }

                {
                  isChatAvailable ?
                    <button
                      disabled={true}
                      className={`mt-5 w-full text-white rounded-tl-lg rounded-br-lg py-2 text-xl bg-gray-400`}
                    >
                      Chat
                    </button>
                    :
                    <div>
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
                }

              </div>
            ))}
          </div>
        )}
        <h1 className="text-center font-bold text-2xl md:text-4xl my-14">
          My Podcast Schedule
        </h1>
        {/* Video + Join / Request Button Section */}
        <section className="md:mb-20 relative">
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
            <img src={mic} alt="Microphone" className=" w-10 md:w-24 h-10 md:h-24 mx-auto" />
            <h1 className="md:text-4xl font-poppins text-white">Date & Time:</h1>

            {/* Conditional Button */}
            {status === "NotScheduled" || (podcast?.questionsStatus === "1stDone" && status === "Finished") ? (
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
        {/* me match of others */}
        {
          <>
            {/* <h1 className="text-center font-bold text-2xl md:text-4xl my-14">
              You&apos;re Matched With Someone
            </h1> */}

            <Carousel arrows infinite={false}>
              {
                getPodcastDetails?.data?.hostPodcastMatches?.map((match) => (
                  <section key={match?._id} className=" relative">
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
                      <img src={mic} alt="Microphone" className=" w-10 md:w-24 h-10 md:h-24 mx-auto" />
                      <h1 className="md:text-4xl font-poppins text-white">Date & Time:</h1>
                      {match?.status === "Playing" || match?.status === "Done" ? (
                        <div>
                          <h2 className="text-white text-center">
                            {match?.schedule?.date} {match?.schedule?.day} {match?.schedule?.time}
                          </h2>
                          <button
                            // disabled={match?.status !== "Playing"}
                            onClick={match?.status === "Playing" || match?.status === "Done" ? () => handleVideoCallForUser(match?.roomCodes) : undefined}
                            className={`w-full mt-2 py-2 rounded-md transition duration-300 
                           ${match?.status === "Playing" || match?.status === "Done"
                                ? "bg-[#F68064] text-white hover:bg-[#e76a4f]"
                                : "bg-gray-200 text-gray-500 cursor-not-allowed"
                              }`}
                          >
                            {match?.status === "Playing" || match?.status === "Done" ? "Join Now" : "Join Now Not Available"}
                          </button>
                        </div>
                      ) : (
                        <div>
                          <h2 className="text-white text-center">
                            {match?.schedule?.date} {match?.schedule?.day} {match?.schedule?.time}
                          </h2>
                          <button
                            className={`w-full mt-2 py-2 rounded-md transition duration-300 
                           ${"bg-gray-200 text-gray-500 cursor-not-allowed"}`}
                          >
                            {"Join Now Not Available"}
                          </button>
                        </div>
                      )}

                    </div>
                  </section>
                ))
              }
            </Carousel>

          </>
        }
        {/* Subscription Plans */}
        <h1 className="text-center font-bold text-2xl md:text-4xl mt-16">
          Subscription Plan
        </h1>
        <Pricing subscriptions={getAllPlans?.data} />
      </div>
      <FirstSurvey isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} podcastId={getPodcastDetails?.data?.podcast?._id}></FirstSurvey>
      <SecondSurvey isSecondModalOpen={isSecondModalOpen} handleSecondOk={handleSecondOk} handleSecondCancel={handleSecondCancel} podcastId={getPodcastDetails?.data?.podcast?._id}></SecondSurvey>
      <After7DaysSurveyModal is7DaysModalOpen={is7DaysModalOpen} handle7DaysOk={handle7DaysOk} handle7DaysCancel={handle7DaysCancel} podcastId={getPodcastDetails?.data?.podcast?._id}></After7DaysSurveyModal>
    </div>
  );
};

export default HomePage;
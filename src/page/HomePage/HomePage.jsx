import React from "react";
import img1 from "../../assets/tes.png";
import video from "../../assets/schedule.mp4";
import mic from "../../assets/mic.png";
import IsPodSafe from "../../component/IsPodSafe/IsPodSafe";
import { Link, useNavigate } from "react-router";
import Pricing from "../../component/Pricing/Pricing";
import {
  useGetPodCastDetailsQuery,
  usePodcastCreateMutation,
} from "../../redux/Api/AuthApi";
import { toast } from "sonner";
const HomePage = () => {
  const navigate = useNavigate();
  const [createPodCast] = usePodcastCreateMutation();
  const { data: getPodcastDetails } = useGetPodCastDetailsQuery();
  console.log(getPodcastDetails?.data?.podcast?.selectedUser);

  const handleVideoCall = () => {
    if (!getPodcastDetails?.data?.podcast?._id) {
      toast.error("Podcast not available!");
    }
    navigate(`/room/${getPodcastDetails?.data?.podcast?._id}`);
  };

  // Create New Podcast
  const handleCreatePodcast = () => {
    createPodCast()
      .unwrap()
      .then((payload) => console.log("fulfilled", payload))
      .catch((error) => console.error("rejected", error));
  };

  return (
    <div className="bg-[#F7E8E1]">
      <div className="container mx-auto">
        <p className="font-poppins font-bold text-2xl py-5">Your Matches</p>
        <div className="flex justify-center">
          {(!getPodcastDetails?.data?.podcast ||
            Object.keys(getPodcastDetails?.data?.podcast).length === 0) && (
            <button
              onClick={() => handleCreatePodcast()}
              className="bg-[#F68064] w-full max-w-[200px]  mt-2 py-2 rounded-md  text-white text-xl"
            >
              Create New Match
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-between items-center gap-10">
          {getPodcastDetails?.data?.podcast?.participants?.map(
            
            (participant, i) => {
              console.log(participant?._id);
              return (
                <div>
                  <Link
                    key={participant?._id}
                    to={`/podcast-details/${participant?._id}`}
                  >
                    <div className="cursor-pointer hover:shadow-2xl rounded-br-3xl relative">
                      <img src={img1} className="w-full" alt="" />
                      <p className="absolute bottom-10 right-[45%] text-xl font-semibold">
                        Match-{i + 1}
                      </p>
                    </div>
                  </Link>
                  {
                    getPodcastDetails?.data?.podcast?.selectedUser && <Link to={`/chat/${getPodcastDetails?.data?.podcast?.selectedUser}`}>
                    <button disabled={participant?._id !== getPodcastDetails?.data?.podcast?.selectedUser}  className={`bg-[#FFA175] mt-5 w-full text-white rounded-tl-lg rounded-br-lg py-2 text-xl ${participant?._id !== getPodcastDetails?.data?.podcast?.selectedUser ? "bg-gray-400"  : "bg-[#FFA175] "}`}>Chat</button>
                    </Link>
                  }
                  
                </div>
              );
            }
          )}
        </div>
        {/* Date and time schedule section */}
        <section className="my-20  relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-[500px]  mx-auto rounded-md  "
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 h-auto">
            <img src={mic} alt="Microphone" className="w-24 h-24 mx-auto " />
            <h1 className="text-4xl font-poppins text-white">Date & Time : </h1>
            <p className="text-white text-center text-xl mt-2">
              {getPodcastDetails?.data?.podcast?._id &&
                "12/07/24 (Monday) at 4 PM"}
            </p>
            <button
              disabled={!getPodcastDetails?.data?.podcast?._id}
              onClick={() => handleVideoCall()}
              className="bg-[#F68064] w-full mt-2 py-2 rounded-md disabled:bg-gray-200"
            >
              Join
            </button>
          </div>
        </section>

        <h1 className="text-center font-bold text-2xl">Subscription Plan</h1>

        {/* Subscription Plan Section */}
        <Pricing subscriptions={getPodcastDetails?.data} />
      </div>
      <IsPodSafe />
    </div>
  );
};

export default HomePage;

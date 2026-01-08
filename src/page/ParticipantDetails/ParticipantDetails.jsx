import { useEffect } from "react";
import { useGetPodCastDetailsQuery } from "../../redux/Api/AuthApi";
import { useNavigate, useParams } from "react-router";

const ParticipantDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: getPodcastDetails, isLoading } = useGetPodCastDetailsQuery();

  const podcastData = getPodcastDetails?.data?.podcast;

  let participant = null;

  if (podcastData) {
    if (podcastData.primaryUser?._id === id) {
      participant = podcastData.primaryUser;
    } else {
      participant = podcastData.participants?.find((p) => p._id === id);
    }
  }

  // Navigate if subscription is free
  useEffect(() => {
    if (getPodcastDetails?.data?.user?.subscription?.fee === "Free") {
      navigate("/home");
    }
  }, [getPodcastDetails, navigate]);

  // --- SKELETON UI ---
  if (isLoading) {
    return (
      <div className="bg-[#F7E8E1] min-h-screen animate-pulse">
        <div className="container mx-auto py-20 max-w-3xl">
          <div className="h-32 bg-gray-200 rounded-md mb-10"></div>
          <div className="h-8 w-32 bg-gray-200 mb-5"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="h-10 bg-gray-200 rounded-lg"></div>
            <div className="h-10 bg-gray-200 rounded-lg"></div>
            <div className="h-10 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!participant) {
    return (
      <div className="bg-[#F7E8E1] flex items-center justify-center min-h-screen">
        <p className="text-xl text-[#FFA175] font-medium">
          Participant not found
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#F7E8E1] min-h-screen">
      <div className="container mx-auto py-20 max-w-3xl">
        {/* BIO SECTION */}
        <div className="bg-white/50 border border-[#FFA175] max-w-3xl mx-auto p-6 rounded-md shadow-sm">
          <h2 className="text-lg font-bold mb-2 text-[#FFA175]">Bio:</h2>
          <p className="text-gray-700 leading-relaxed">
            {participant.bio ? participant.bio : "No Bio Available"}
          </p>
        </div>

        {/* INTEREST SECTION */}
        <p className="text-2xl font-semibold mt-10 mb-5 text-gray-800">
          Interests:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-3xl mx-auto gap-5">
          {participant.interests && participant.interests.length > 0 ? (
            participant.interests.map((int, i) => (
              <p
                key={i}
                className="bg-white text-center rounded-lg py-2.5 border border-[#FFA175] shadow-sm font-medium text-gray-700"
              >
                {int}
              </p>
            ))
          ) : (
            <p className="text-gray-500 italic">No interests listed</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParticipantDetails;

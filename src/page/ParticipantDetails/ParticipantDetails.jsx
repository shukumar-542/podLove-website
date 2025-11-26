import { useEffect } from "react";
import { useGetPodCastDetailsQuery } from "../../redux/Api/AuthApi";
import { useNavigate, useParams } from "react-router";

const ParticipantDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: getPodcastDetails } = useGetPodCastDetailsQuery();
  const participants = getPodcastDetails?.data?.podcast?.participants || [];

  const participant = participants.find((p) => p._id === id);

  // Navigate if subscription is free
  useEffect(() => {
    if (getPodcastDetails?.data?.user?.subscription?.fee === "Free") {
      navigate("/home");
    }
  }, [getPodcastDetails, navigate]);

  if (!participant) {
    return (
      <div className="bg-[#F7E8E1] flex items-center justify-center min-h-screen">
        <p className="text-xl text-[#FFA175]">Participant not found</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F7E8E1] min-h-screen">
      <div className="container mx-auto py-20 max-w-3xl">
        <p className="border border-[#FFA175] max-w-3xl mx-auto p-5 rounded-md">
          {participant.bio ? participant.bio : "No Bio Available"}
        </p>

        <p className="text-2xl font-semibold mt-8 mb-5">Interest:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-3xl mx-auto gap-5">
          {participant.interests?.map((int, i) => (
            <p
              key={i}
              className="bg-white text-center rounded-lg py-2 border border-[#FFA175]"
            >
              {int}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParticipantDetails;

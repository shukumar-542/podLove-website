import { useNavigate } from "react-router";
import { toast } from "sonner";
import img1 from "../../assets/tes.png";

const MatchCards = ({
  podcast,
  userId,
  isPrimaryUser,
  isBioAvailable,
  isChatAvailable,
}) => {
  const navigate = useNavigate();

  const displayCards = isPrimaryUser
    ? podcast?.participants?.filter((p) => p._id !== userId)
    : [podcast?.primaryUser];

  const handleChat = (id) => {
    if (!isChatAvailable) {
      return toast.error("Upgrade your plan to unlock chat features.");
    }
    navigate(`/chat/${id}`);
  };

  const handleProfileClick = (id) => {
    if (!isBioAvailable) {
      return toast.info(`Upgrade to Scout plan to view full bio.`);
    }
    navigate(`/podcast-details/${id}`);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
      {displayCards?.map((person, i) => {
        const cardLabel = isPrimaryUser ? `Spark ${i + 1}` : "Spotlight";

        return (
          <div key={person?._id || i} className="flex flex-col">
            <div
              onClick={() => handleProfileClick(person?._id)}
              className="relative overflow-hidden rounded-br-3xl shadow-lg cursor-pointer "
            >
              <img src={img1} className="w-full  object-cover" alt="profile" />

              {/* OVERLAY TEXT - CENTERED */}
              <div className="absolute left-1/2 whitespace-nowrap -translate-x-1/2 bottom-5 flex flex-col items-center justify-center">
                <p className="text-gray-800 text-xl font-bold tracking-wide">
                  {cardLabel}
                </p>

                {!isBioAvailable && (
                  <div className="mt-2 bg-white/90 px-3 py-1 rounded shadow-md">
                    <p className="text-[10px] font-bold text-[#FFA175] uppercase tracking-wider">
                      Upgrade to View Bio
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* CHAT BUTTON */}
            <button
              onClick={() => handleChat(person?._id)}
              className={`mt-4 w-full py-2.5 rounded-tl-lg rounded-br-lg text-white font-bold tracking-wide transition-all ${
                isChatAvailable
                  ? "bg-[#FFA175] hover:bg-[#ff8e58] active:scale-95 shadow-sm"
                  : "bg-gray-400 cursor-not-allowed opacity-80"
              }`}
            >
              {isChatAvailable ? "CHAT NOW" : "CHAT LOCKED"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MatchCards;

import { useNavigate } from "react-router";
import { toast } from "sonner";
import img1 from "../../assets/tes.png";

const MatchCards = ({
  podcast,
  userId,
  isPrimaryUser,
  isBioAvailable,
  isChatAvailable,
  isLoading,
}) => {
  const navigate = useNavigate();

  const displayCards = isPrimaryUser
    ? podcast?.participants?.filter((p) => p._id !== userId) || []
    : podcast?.primaryUser
    ? [podcast.primaryUser]
    : [];
  console.log(displayCards);
  const handleChat = (id) => {
    if (!isChatAvailable) {
      return toast.error("Upgrade your plan to unlock chat features.");
    }
    navigate(`/chat/${id}`);
  };

  const handleProfileClick = (id, label) => {
    if (!isBioAvailable) {
      return toast.info(`Upgrade your plan to view ${label}'s full bio.`);
    }
    navigate(`/podcast-details/${id}`);
  };

  // --- SKELETON LOADER COMPONENT ---
  const SkeletonCard = () => (
    <div className="flex flex-col animate-pulse">
      <div className="relative overflow-hidden rounded-br-3xl bg-white h-80 w-full shadow-sm">
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-2/3 h-6 bg-gray-300 rounded"></div>
      </div>
      <div className="mt-4 w-full h-11 bg-white rounded-tl-lg rounded-br-lg"></div>
    </div>
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
      {isLoading
        ? Array.from({ length: 4 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        : displayCards?.map((person, i) => {
            const cardLabel = isPrimaryUser ? `Spark ${i + 1}` : "Spotlight";

            return (
              <div key={person?._id || i} className="flex flex-col">
                <div
                  onClick={() => handleProfileClick(person?._id, cardLabel)}
                  className="relative overflow-hidden rounded-br-3xl shadow-lg cursor-pointer "
                >
                  {/* IMAGE WITH GRAYSCALE LOGIC */}
                  <img
                    src={img1}
                    className={`w-full object-cover transition-all duration-300 ${
                      !isBioAvailable ? "grayscale opacity-80" : "grayscale-0"
                    }`}
                    alt="profile"
                  />

                  {/* OVERLAY TEXT - CENTERED */}
                  <div className="absolute left-1/2 whitespace-nowrap -translate-x-1/2 bottom-5 flex flex-col items-center justify-center">
                    <p
                      className={`text-xl font-bold tracking-wide ${
                        !isBioAvailable ? "text-gray-500" : "text-gray-800"
                      }`}
                    >
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

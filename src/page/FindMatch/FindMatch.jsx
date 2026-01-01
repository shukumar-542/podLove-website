import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import bg from "../../assets/m.png";
import match1 from "../../assets/match.png";
import { useFindMatchMutation, useGetUserQuery } from "../../redux/Api/AuthApi";
import { toast } from "sonner";
import AuthButton from "../../component/AuthButton/AuthButton";

const FindMatch = () => {
    const navigate = useNavigate();
    const [findMatch, { isLoading, data: matchData }] = useFindMatchMutation();
    const { data: getUser } = useGetUserQuery();
    const [matches, setMatches] = useState([]);

    const userId = getUser?.data?._id;

    useEffect(() => {
        const token = localStorage.getItem("podlove-token");
        if (!token) {
            navigate("/login", { replace: true });
            return;
        }

        // Automatically trigger find match when page loads
        const triggerMatch = async () => {
            try {
                const res = await findMatch().unwrap();
                if (res.success) {
                    // The data returned is the podcast document with participants
                    setMatches(res.data.participants || []);
                    toast.success("AI has found your best matches!");
                }
            } catch (err) {
                toast.error(err?.data?.message || "Failed to find matches");
            }
        };

        triggerMatch();
    }, [findMatch]);

    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                imageRendering: "high-quality",
            }}
            className="min-h-screen relative py-10"
        >
            <div className="bg-black absolute opacity-50 inset-0 z-0 "></div>
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center h-full">
                <div className="bg-white shadow-2xl shadow-[#F26828] rounded-2xl p-6 md:p-10 w-full max-w-4xl">
                    <h1 className="text-center font-poppins font-bold text-4xl text-[#242424] mb-2">
                        AI Matchmaking
                    </h1>
                    <p className="text-center text-gray-600 mb-8 max-w-lg mx-auto">
                        Our advanced AI has analyzed your profile and personality to find the most compatible partners for your next podcast.
                    </p>

                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#F26828] mb-4"></div>
                            <p className="text-lg font-medium text-gray-700 animate-pulse">
                                AI is analyzing profiles and calculating compatibility...
                            </p>
                        </div>
                    ) : matches.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-xl text-gray-500 italic">No matches found at the moment. Try updating your profile or preferences!</p>
                            <AuthButton
                                className="mt-6 max-w-xs mx-auto"
                                handleOnClick={() => navigate("/home")}
                            >
                                Go Back Home
                            </AuthButton>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {matches
                                    .filter(m => m.user?._id !== userId)
                                    .map((match, index) => (
                                        <div
                                            key={index}
                                            className="border-2 border-[#FFB491] rounded-2xl overflow-hidden hover:border-[#F26828] transition-all duration-300 bg-orange-50/30 group"
                                        >
                                            <div className="p-5 flex items-start gap-4">
                                                <div className="relative flex-shrink-0">
                                                    <img
                                                        src={match.user?.avatar || match1}
                                                        alt={match.user?.name || "Match"}
                                                        className="w-20 h-20 rounded-xl object-cover border-2 border-white shadow-md"
                                                    />
                                                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#F26828] to-[#EF8559] text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                                                        {match.score}%
                                                    </div>
                                                </div>
                                                <div className="flex-grow">
                                                    <h3 className="text-xl font-bold text-[#242424] group-hover:text-[#F26828] transition-colors">
                                                        {match.user?.name || "Compatible Soul"}
                                                    </h3>
                                                    <div className="flex gap-2 mt-1">
                                                        <span className="text-[10px] bg-white border border-[#FFB491] text-[#F26828] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                                                            MATCHING SCORE: {match.score}%
                                                        </span>
                                                    </div>
                                                    {match.reasoning && (
                                                        <div className="mt-3 relative">
                                                            <p className="text-sm text-gray-600 italic leading-relaxed line-clamp-3">
                                                                "{match.reasoning}"
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="px-5 pb-5 mt-auto">
                                                <AuthButton
                                                    className="w-full text-xs py-2 rounded-xl"
                                                    handleOnClick={() => navigate(`/podcast-details/${match.user?._id || match.user}`)}
                                                >
                                                    View Profile
                                                </AuthButton>
                                            </div>
                                        </div>
                                    ))}
                            </div>

                            <div className="flex flex-col items-center gap-4 pt-6 border-t border-gray-100">
                                <p className="text-sm text-gray-500 text-center">
                                    Matched users are ready and waiting for their podcast sessions.
                                </p>
                                <div className="flex w-full max-w-md gap-4">
                                    <button
                                        onClick={() => navigate("/home")}
                                        className="flex-1 py-3 px-6 border-2 border-[#FFB491] text-[#F26828] font-bold rounded-xl hover:bg-orange-50 transition-all"
                                    >
                                        Back to Home
                                    </button>
                                    <AuthButton
                                        className="flex-1"
                                        handleOnClick={() => navigate("/match-result")}
                                    >
                                        View All Matches
                                    </AuthButton>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FindMatch;

import { Link, useNavigate } from "react-router";
import bg from "../../assets/m.png";
import match1 from "../../assets/match.png";
import { useGetMatchesQuery, useGetUserQuery } from "../../redux/Api/AuthApi";
import { useEffect, useState } from "react";

const MatchResult = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(null);
  const { data, isLoading } = useGetMatchesQuery();
  const { data: getUser } = useGetUserQuery();

  const userId = getUser?.data?._id;
  const plan = getUser?.data?.subscription?.status;

  useEffect(() => {
    const token = localStorage.getItem("podlove-token");
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        imageRendering: "high-quality",
      }}
      className="h-[100vh]  relative   "
    >
      {/* Opacity section */}
      <div className="bg-black absolute opacity-50 inset-0 z-0 "></div>
      {/* Grid divide by 12 column */}
      <div className="grid grid-cols-12 items-center justify-center h-full w-full container mx-auto">
        <div className="  md:col-span-1"></div>
        {/* Main content */}
        <div className="bg-white shadow-2xl shadow-[#F26828]   rounded-md  p-5 md:p-10 col-span-12 md:col-span-5 z-10 mx-2 md:mx-0">
          <h1 className="text-center font-poppins font-semibold text-4xl">
            Match
          </h1>
          {data?.data?.users?.length && (
            <p className="text-center max-w-80 mx-auto mt-2">
              We have found potential matches for you!
            </p>
          )}

          {isLoading ? (
            <p className="text-center my-16">Loading...</p>
          ) : !data?.data?.users?.length ? (
            <p className="text-center my-16">No matches found.</p>
          ) : (
            <div className="">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
                {data?.data?.users
                  ?.filter((participant) => participant?._id !== userId) // exclude current user
                  ?.map((user, index) => {
                    const isPaidUser = plan === "PAID";

                    const Card = (
                      <div
                        onClick={() => setSelected(user)}
                        className={`cursor-pointer group relative ${selected?._id === user?._id
                          ? "border-2 border-[#F26828] scale-105"
                          : "border-2 border-white hover:border-[#FFB491]"
                          } rounded-tl-xl rounded-br-xl transition-all duration-300 shadow-sm`}
                      >
                        <img src={user?.avatar || match1} alt="" className="w-full h-full object-cover rounded-tl-[10px] rounded-br-[10px]" />
                        {user.score && (
                          <div className="absolute top-1 right-1 bg-[#F26828] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-md">
                            {user.score}%
                          </div>
                        )}
                      </div>
                    );

                    return isPaidUser ? (
                      <div key={index}>
                        {Card}
                      </div>
                    ) : (
                      <div key={index}>{Card}</div>
                    );
                  })}
              </div>

              {selected && (
                <div className="bg-orange-50/50 border border-[#FFB491] rounded-2xl p-5 mb-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl text-[#242424]">{selected.name}</h3>
                    <div className="flex gap-2">
                      <span className="text-[10px] bg-white border border-[#FFB491] text-[#F26828] px-2 py-0.5 rounded-full font-bold">
                        MATCHING SCORE: {selected.score}%
                      </span>
                    </div>
                  </div>
                  {selected.reasoning ? (
                    <p className="text-sm text-gray-600 italic leading-relaxed">
                      "{selected.reasoning}"
                    </p>
                  ) : (
                    <p className="text-sm text-gray-400 italic">No detailed analysis available for this match.</p>
                  )}
                  <Link to={`/podcast-details/${selected._id}`} className="block mt-4">
                    <button className="text-[#F26828] font-bold text-sm hover:underline flex items-center gap-1">
                      View full profile →
                    </button>
                  </Link>
                </div>
              )}
            </div>
          )}
          <p className="text-center max-w-96 mx-auto mb-10">
            The schedule for your podcast episodes will be shared with you soon.
          </p>

          <div className="mx-16">
            <Link to={"/home"}>
              <button
                className={
                  "bg-gradient-to-t from-[#3E0A0A] via-[#EF8559] to-[#FFA175] border-[#EF8559] shadow-inner shadow-white py-2 w-full"
                }
              >
                Next
              </button>
            </Link>
          </div>
        </div>

        {/* Space after content */}
        <div className="md:col-span-6"></div>
      </div>
    </div>
  );
};

export default MatchResult;

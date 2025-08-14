// import { Link } from "react-router";
import { Link } from "react-router";
import bg from "../../assets/m.png";
import match1 from "../../assets/match.png";
import { useGetMatchsQuery } from "../../redux/Api/AuthApi";
import { useState } from "react";
// import { toast } from "sonner";

const MatchResult = () => {
  const [selected, setSelected] = useState(null);
  const { data, isLoading } = useGetMatchsQuery();
  console.log(data?.data?.users);
  // const navigate = useNavigate();

  // const navigateToDetails = () => {
  //   console.log('Selected match:', selected);
  //   if (!selected) {
  //     toast.error("Please select a match to proceed!");
  //     return
  //   }
  //   navigate('/home')
  // }

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
          {
            data?.data?.users?.length &&
            <p className="text-center max-w-80 mx-auto mt-2">
              We have found potential matches for you!
            </p>
          }

          {
            isLoading ? (
              <p className="text-center my-16">Loading...</p>
            ) : !data?.data?.users?.length ? (
              <p className="text-center my-16">No matches found.</p>
            ) :
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 ">
                {
                  data?.data?.users?.map((user, index) => (
                    <Link to={`/match-bio?bio=${encodeURIComponent(user?.bio || "")}&interests=${encodeURIComponent(user?.interests || "")}`} className="cursor-pointer" key={index}>
                      <div onClick={() => setSelected(user)} key={index} className={` cursor-pointer ${selected?._id === user?._id ? "border-2 border-[#F26828]" : "border-2 border-white"} rounded-tl-xl  rounded-br-xl`}>
                        <img src={match1} alt="" />
                      </div>
                    </Link>
                  ))
                }
              </div>
          }
          <p className="text-center max-w-96 mx-auto mb-10">
            The schedule for your podcast episodes will be shared with you soon.
          </p>

          <div className="mx-16">
            <Link to={'/home'}>
              <button className={"bg-gradient-to-t from-[#3E0A0A] via-[#EF8559] to-[#FFA175] border-[#EF8559] shadow-inner shadow-white py-2 w-full"}>Next</button>
            </Link>
          </div>
        </div>

        {/* Space after content */}
        <div className="md:col-span-6"></div>
      </div>
    </div >
  );
};

export default MatchResult;

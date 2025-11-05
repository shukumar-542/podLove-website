import { useLocation } from "react-router";
import bg from "../../assets/b.png";

// const interest = ["Photography", "Traveling", "Art & Craft", "Cooking"];
const MatchBio = () => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const bio = params.get("bio") || "No bio found";
  const interests = params.get("interests")
    ? params.get("interests").split(",")
    : [];

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
        <div className="bg-white shadow-black shadow-2xl  rounded-md  p-5 md:p-10 col-span-12 md:col-span-5 z-10 mx-2 md:mx-0">
          <h1 className="text-center font-poppins font-semibold text-4xl">
            Match 1 Bio
          </h1>

          <p className="my-10 border border-[#FFA175] p-5 rounded-md text-[#333333] font-poppins">
            {bio}
          </p>
          <p className="font-poppins mb-5">Interest : </p>
          <div className="grid grid-cols-2  justify-between gap-5">
            {interests?.map((item, index) => (
              <p
                key={index}
                className="text-center border border-[#FFA175] rounded-full py-2 text-[#FFA175]"
              >
                {item}
              </p>
            ))}
          </div>
          {/* <div className="">
            <Link to={"/match-result"}>
              <AuthButton className={"py-1  mt-5 "}>Next</AuthButton>
            </Link>
          </div> */}
        </div>

        {/* Space after content */}
        <div className="md:col-span-6"></div>
      </div>
    </div>
  );
};

export default MatchBio;

import step1 from "../../assets/step11.png";
import step2 from "../../assets/step2.png";
import step3 from "../../assets/step3.png";
// import step4 from "../../assets/step4.png";
import step5 from "../../assets/tt.png";
import { Button } from "../Shared/Button/Button";
import { Link } from "react-router";
const HowItWork = () => {
  const token = localStorage.getItem("podlove-token");

  return (
    <div className="p-4 md:px-0">
      <div className="container mx-auto my-20">
        <h1 className=" text-2xl md:text-4xl text-center text-[#6B4431] font-bold">
          How It Works
        </h1>
        {/* <p className="text-center text-xl mt-2 text-[#6B4431]">
          Your Step-by-Step Journey
        </p> */}
        <p className="text-[#5C5C5C] text-center mt-2">
          We’ve streamlined the process into four simple steps
        </p>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-20 mt-10">
          <div className="bg-[#FFE2D4] hover:bg-[#FFC0A3] transition-all duration-200 border border-dashed p-4 relative">
            <div className="">
              <img
                src={step1}
                alt=""
                className="bg-[#FFE2D4] shadow-xl p-1 rounded-full absolute top-[-25px]"
              />
              <p className="text-[#E84B3C] font-bold text-2xl flex justify-end">
                01
              </p>
            </div>
            <p className="text-[#6B4431] text-2xl font-bold  ">
              Join & set intentions
            </p>
            <p className="mt-5">
              Create your account, pick your tier (Sampler / Seeker / Scout),
              and share preferences.
            </p>
          </div>
          <div className="bg-[#FFE2D4] hover:bg-[#FFC0A3] transition-all duration-200 border border-dashed p-4 relative">
            <div className="">
              <img
                src={step2}
                alt=""
                className="bg-[#FFE2D4] shadow-xl p-2 rounded-full absolute top-[-25px]"
              />
              <p className="text-[#8D44AB] font-bold text-2xl flex justify-end">
                02
              </p>
            </div>
            <p className="text-[#6B4431] text-2xl font-bold  ">We match you</p>
            <p className="mt-5">
              You are blindly matched on compatibility, lifestyle, and shared
              goals.
            </p>
          </div>
          <div className="bg-[#FFE2D4] hover:bg-[#FFC0A3] transition-all duration-200 border border-dashed p-4 relative">
            <div className="">
              <img
                src={step3}
                alt=""
                className="bg-[#FFE2D4] shadow-xl p-2 rounded-full absolute top-[-25px]"
              />
              <p className="text-[#FF853D] font-bold text-2xl flex justify-end">
                03
              </p>
            </div>
            <p className="text-[#6B4431] text-2xl font-bold  ">Meet on video</p>
            <p className="mt-5">
              If it clicks, continue the chat in-app and plan a first date in a
              public place.
            </p>
          </div>
          <div className="bg-[#FFE2D4] hover:bg-[#FFC0A3] transition-all duration-200 border border-dashed p-4 relative">
            <div className="">
              <img
                src={step5}
                alt=""
                className="bg-[#FFE2D4]  shadow-xl p-1 px-2 rounded-full absolute top-[-25px]"
              />
              <p className="text-[#18BB9B] font-bold text-2xl flex justify-end">
                04
              </p>
            </div>
            <p className="text-[#6B4431] text-2xl font-bold  ">
              Return & Choose What’s Next
            </p>
            <p className="mt-5">Return to tell us all about your date.</p>
          </div>
        </section>
        <div className="mt-10 flex justify-center">
          {token ? (
            <Button className={"py-2"}>
              <Link to={"/home"}>Find your Match</Link>
            </Button>
          ) : (
            <Link to="/connection-pathway">
              <Button className={"py-2"}>Find your Match</Button>
            </Link>
          )}
          {/* <Button className={'py-2'}><Link to={"/sign-up"}>Find your Match</Link></Button> */}
        </div>
      </div>
    </div>
  );
};

export default HowItWork;

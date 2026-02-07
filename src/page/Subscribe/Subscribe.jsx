import Pricing from "../../component/Pricing/Pricing";

const Subscribe = () => {
  return (
    <div className="bg-[#F7E8E1] min-h-dvh">
      <div className="max-w-5xl mx-auto px-4 pt-10 text-center">
        <p className="text-2xl md:text-4xl font-bold">Choose Your Plan</p>
      </div>
      <div className="max-w-7xl sm:px-6 px-4 mx-auto pb-20">
        <Pricing paidCtaLabel="Continue" />
      </div>
    </div>
  );
};

export default Subscribe;

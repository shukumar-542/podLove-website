import Pricing from "../../component/Pricing/Pricing";

const Subscription = () => {
  return (
    <div className="bg-[#F7E8E1] min-h-dvh">
      <p className="text-2xl md:text-4xl font-bold text-center pt-10">
        Subscription Plans
      </p>

      <div className="max-w-7xl sm:px-6 px-4 mx-auto pb-20">
        <Pricing />
      </div>
    </div>
  );
};

export default Subscription;

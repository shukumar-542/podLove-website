import about from "../../assets/about3.png";
import bg from "../../assets/about-bg.png";
const AboutUs = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className="container mx-auto pb-16">
        {/* About text */}
        <div className="bg-[#FFA175] py-10">
          <h1 className="text-2xl md:text-4xl px-4 font-bold">Discover Who We Are &</h1>
          <div className="flex items-center  ml-4 mt-5">
            <div className="bg-[#DC4600] h-2 w-10"></div>
            <p className="text-white font-bold text-2xl md:text-4xl px-4">What drives us</p>
          </div>
        </div>

        {/* about Image  */}
        <div className="bg-red-500 w-full">
          <img
            src={about}
            className="w-full  object-cover h-[500px] "
            alt=""
          />
        </div>
        <div className="py-10 space-y-3 px-2 md:px-0">
          <p className="text-2xl md:text-4xl font-bold">
            Get to Know Us: Our <span className="text-[#E8936A]"> Journey</span>
          </p>
          <p className="text-2xl md:text-4xl font-bold">
            And <span className="text-[#E8936A]">Vision</span>{" "}
          </p>
        </div>
        {/* About description */}
        <h1 className=" font-poppins text-2xl font-semibold mb-2 px-2 md:px-0">
          Mission:
        </h1>
        <p className=" font-poppins mb-5 px-2 md:px-0">
          To transform the landscape of modern dating by creating a platform where conversation, shared values, and emotional intelligence are the true foundations of connection, empowering individuals to find profound, lasting relationships.
        </p>
        <h1 className=" font-poppins text-2xl font-semibold mb-2 px-2 md:px-0">
          Vision:
        </h1>
        <p className=" font-poppins mb-5 px-2 md:px-0">
          To create a global community where technology elevates human connection, transforming how adults find meaningful relationships by prioritizing authentic dialogue, shared values, and emotional intelligence over superficial interactions.
        </p>

      </div>
    </div>
  );
};

export default AboutUs;

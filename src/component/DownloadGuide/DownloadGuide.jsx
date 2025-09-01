import iPhone from "../../assets/iPhone 11 Pro.png";
import logo from "../../assets/podLogo.png";
import app from "../../assets/appStore.png";
import google from "../../assets/googleStore.png";
const DownloadGuide = () => {
  return (
    <div className="container mx-auto my-10 p-4 md:p-0 ">
      <div className="grid md:grid-cols-12 items-center justify-between md:gap-2">
        <div className="md:col-span-8  mx-auto">
          <div className="md:flex items-center justify-center gap-10">
            <img className="w-[550px]" src={logo} alt="" />
            <div>
              {/* <p className="text-[#767676]">Download </p>
              <p className="text-[#FFA175]">The PodLove app </p> */}
            </div>
          </div>

          <div></div>
          <p className="text-2xl text-center md:mt-5">Download The PodLove App</p>
          {/* <p className="text-[#767676] max-w-[380px] mt-5">
            Download the PodLove App and Match your love Online to get the
            fastest love.
          </p> */}

          <div className="flex justify-center mt-5 md:mt-10 items-center  gap-4 ">
            <img src={app} className="w-[120px] md:w-[200px]" alt="" />
            <img src={google} className="w-[120px] md:w-[200px]" alt="" />
          </div>
        </div>
        <div className="col-span-4 mx-auto flex items-center justify-center mt-5 md:mt-0">
          <img className=" h-[400px] lg:h-[717px] " src={iPhone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DownloadGuide;

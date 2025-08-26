import iPhone from "../../assets/iPhone 11 Pro.png";
import logo from "../../assets/podLogo.png";
import app from "../../assets/appStore.png";
import google from "../../assets/googleStore.png";
const DownloadGuide = () => {
  return (
    <div className="container mx-auto my-10 p-4 md:p-0 ">
      <div className="grid grid-cols-1 md:grid-cols-12 items-center justify-between gap-2">
        <div className="col-span-8  mx-auto">
          <div className="md:flex items-center gap-10">
            <img className="max-w-[267px] max-h-[56px]" src={logo} alt="" />
            <div>
              <p className="text-[#767676]">Get PodLove With </p>
              <p className="text-[#FFA175]"> Our Mobile App </p>
            </div>
          </div>

          <div></div>
          <p className="text-2xl font-bold mt-5">Download the App</p>
          <p className="text-[#767676] max-w-[380px] mt-5">
            Download the PodLove App and Match your love Online to get the
            fastest love.
          </p>

          <div className="flex mt-10 items-center  gap-4 ">
            <img src={app} className="h-[44px] w-[150px]" alt="" />
            <img src={google} className="h-[44px] w-[150px]" alt="" />
          </div>
        </div>
        <div className="col-span-4 mx-auto">
          <img className=" h-[400px] md:h-[717px] " src={iPhone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DownloadGuide;

import React, { useState } from "react";
import bg from "../../assets/location-bg.png";
import AuthButton from "../../component/AuthButton/AuthButton";
import { Link } from "react-router";
import { Input, Slider, Switch } from "antd";
const Location = () => {
    const [disabled, setDisabled] = useState(false);
    const [value, setValue] = useState(30); 
  
    const onChangeSlider = (val) => {
      setValue(val); 
      console.log("Slider Value:", val);
    };
  
  
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        imageRendering: "high-quality",
      }}
      className="h-[100vh]  relative"
    >
      <div className="bg-black absolute opacity-50 inset-0 z-0 "></div>
      <div className="flex items-center justify-start max-w-5xl mx-auto  h-full p-2 md:p-0 z-10 relative">
        <div className="bg-white rounded-md  p-5 md:p-10 max-w-5xl">
          <p className=" text-xl md:text-4xl font-bold text-[#333333] text-center">
            Location
          </p>
          <p className="mt-4 max-w-96 font-thin text-center">
            Please clarify if you want full address or city? Please ask for the
            city only (specify)
          </p>
          <div className="py-5">
            <p className="mb-2 font-poppins">Your Location</p>
            <Input className="border border-[#FFA175]"/>
          </div>
        <div>
            <p>Preferred Distance</p>

            <div className="flex justify-between items-center mt-5 text-xl">
                <p>0 Miles</p>
                <p>100 Miles</p>
            </div>
        </div>
          <Slider defaultValue={30} disabled={disabled} onChange={onChangeSlider} className="mb-10" />
          {/* Disabled: <Switch size="small" checked={disabled} onChange={onChange} /> */}
          <Link to={"/age"}>
            <AuthButton className={"py-1"}>Next</AuthButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Location;

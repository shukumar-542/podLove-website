/* eslint-disable no-unused-vars */
import { useState } from "react";
import bg from "../../assets/location-bg.png";
import AuthButton from "../../component/AuthButton/AuthButton";
import { Slider } from "antd";
import LocationSearch from "../../component/LocationSearch/LocationSearch";
import { useUpdateUserInfoMutation } from "../../redux/Api/AuthApi";
import { toast } from "sonner";
import { useNavigate } from "react-router";
const Location = () => {
  const navigate = useNavigate()
  const [updateUserInfo, { isLoading }] = useUpdateUserInfoMutation();

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState(30);

  const onChangeSlider = (val) => {
    setValue(val);
  };

  const handleUpdateLocation = () => {
    const data = {
      location: {
        place: selectedLocation?.address,
        longitude: selectedLocation?.lng,
        latitude: selectedLocation?.lat,
      },
      preferences: {
        distance: value,
      },
    };

    localStorage.setItem('distance', JSON.stringify({
      distance: value,
    }))

    if (!selectedLocation?.address) {
      toast.error("please select location")
      return;
    }

    updateUserInfo(data)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message)
        navigate('/age')
      })
      .catch((error) => toast.error(error?.data?.message));
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
        <div className="bg-white shadow-2xl shadow-[#F26828] rounded-md  p-5 md:p-10 max-w-5xl">
          <p className=" text-xl md:text-4xl font-bold text-[#333333] text-center">
            Location
          </p>
          <p className="mt-4 max-w-96 font-thin text-center">
            Please clarify if you want full address or city? Please ask for the
            city only (specify)
          </p>
          <div className="py-5">
            <p className="mb-2 font-poppins">Please Type Your City</p>
            {/* <Input onChange={(e) => setSearchTerm(e.target.value)}  value={searchTerm}  className="border border-[#FFA175]"/> */}
            <LocationSearch onSelectLocation={setSelectedLocation} />
          </div>
          <div>
            <p>Preferred Distance</p>

            <div className="flex justify-between items-center mt-5 text-xl">
              <p>0 Miles</p>
              <p>{value} Miles</p>
            </div>
          </div>
          <Slider
            defaultValue={30}
            disabled={disabled}
            onChange={onChangeSlider}
            className="mb-10"
          />
          <AuthButton
            handleOnClick={() => handleUpdateLocation()}
            disabled={isLoading}
            className={"py-2"}
          >
            {isLoading ? "Loading..." : "Next"}
          </AuthButton>
        </div>
      </div>
    </div>
  );
};

export default Location;

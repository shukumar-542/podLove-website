import { useState } from "react";
import { useNavigate } from "react-router";
import AuthButton from "../../component/AuthButton/AuthButton";
import { Checkbox } from "antd";
import bg from "../../assets/ethnicity.png";
import { useUpdateUserInfoMutation } from "../../redux/Api/AuthApi";
import { toast } from "sonner";
const options = [
  "African American / Black",
  "Asian",
  "Caucasian/White",
  "Hispanic/Latino",
  "Middle Eastern",
  "Native American",
  "Pacific Islander",
  "Other",
  // "No preference",
];
const option = [
  "African American / Black",
  "Asian",
  "Caucasian/White",
  "Hispanic/Latino",
  "Middle Eastern",
  "Native American",
  "Pacific Islander",
  "Other",
  "No preference",
];

const Ethnicity = () => {
  const navigate = useNavigate();
  const [updateEthnicity, { isLoading }] = useUpdateUserInfoMutation();
  const [selectedBodyType, setSelectedBodyType] = useState([]);
  const [preferredBodyType, setPreferredBodyType] = useState([]);

  const handleBodyTypeChange = (checkedValues) => {
    setSelectedBodyType(checkedValues);
  };

  const handlePreferredBodyTypeChange = (checkedValues) => {
    setPreferredBodyType(checkedValues);
  };
  const age = JSON.parse(localStorage.getItem('age'))
  const gender = JSON.parse(localStorage.getItem('gender'))
  const bodyType = JSON.parse(localStorage.getItem('bodyType'))
  const distance = JSON.parse(localStorage.getItem('distance'))

  const handleEthnicity = () => {
    if (preferredBodyType?.length === 0 || selectedBodyType.length === 0) {
      return toast.error("Please select both your preferred body type and selected body type.")
    }
    const data = {
      preferences: {
        age: age,
        gender: gender?.gender,
        bodyType: bodyType?.bodyType,
        ethnicity: preferredBodyType,
        distance: distance?.distance,
      },
      ethnicity: selectedBodyType,
    };

    updateEthnicity(data)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message)
        localStorage.removeItem('age')
        localStorage.removeItem('gender')
        localStorage.removeItem('bodyType')
        localStorage.removeItem('distance')
        navigate("/bio")
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
      className="h-[100vh]  relative "
    >
      {/* Opacity section */}
      <div className="bg-black absolute opacity-50 inset-0 z-0 "></div>
      {/* Grid divide by 12 column */}
      <div className="grid grid-cols-12 items-center justify-center h-full w-full container mx-auto">
        <div className="  md:col-span-1"></div>
        {/* Main content */}
        <div className="bg-white shadow-2xl shadow-[#F26828] rounded-md  p-5 md:p-10 col-span-12 md:col-span-5 z-10 mx-2 md:mx-0">
          <h1 className="text-center font-poppins font-semibold text-4xl">
            Ethnicity
          </h1>
          <p className=" mt-5 font-poppins text-[14px] ">
            Cultural expression and identity are deeply tied to the customs,
            history, language, and religion of people from different geographic
            regions.
          </p>
          <p className=" mb-5 font-poppins text-[14px] mt-2">
            At PodLove, we believe love can flourish across all backgrounds. Are
            there any cultural or ethnic preferences that are important for you
            in a partner?
          </p>

          {/* <p className='text-md text-center'>Please select one</p> */}
          <div className="mb-4">
            <p className="font-semibold">What is your Ethnicity?</p>
            {/* <p className="text-sm text-gray-500">Please select one</p> */}
            <Checkbox.Group
              options={options}
              value={selectedBodyType}
              onChange={handleBodyTypeChange}
              className="flex flex-wrap gap-3 mt-2"
            />

            {/* Preferred Body Type Selection */}
            <div className="my-10">
              <p className="font-semibold">Preferred Ethnicity </p>
              {/* <p className="text-sm text-gray-500">Please select one</p> */}
              <Checkbox.Group
                options={option}
                value={preferredBodyType}
                onChange={handlePreferredBodyTypeChange}
                className="flex flex-wrap gap-3 mt-2"
              />
            </div>
          </div>
          {/* <Link to={"/bio"}> */}
          <AuthButton
            handleOnClick={() => handleEthnicity()}
            className={"py-2"}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Next"}
          </AuthButton>
          {/* </Link> */}
        </div>

        {/* Space after content */}
        <div className="md:col-span-6"></div>
      </div>
    </div>
  );
};

export default Ethnicity;
